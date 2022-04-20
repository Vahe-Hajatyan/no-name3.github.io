import { stopSubmit } from "redux-form";
import { authAPI, securityAPI } from "./../api/api";

const SET_USER_DATA = "SET_USER_DATA";
const GET_CAPTCHA_URL = "GET_CAPTCHA_URL";

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  captchaURL: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
    case GET_CAPTCHA_URL:
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
};

export const setUserData = (id, email, login, isAuth) => {
  return {
    type: SET_USER_DATA,
    data: { id, email, login, isAuth },
  };
};

export const getCaptchaSuccess = (captchaURL) => {
  return {
    type: GET_CAPTCHA_URL,
    data: {captchaURL},
  };
};

export const getAuth = () => (dispatch) => {
  return authAPI.getHeader().then((data) => {
    if (data.resultCode === 0) {
      let { id, email, login } = data.data;
      dispatch(setUserData(id, email, login, true));
    }
  });
};

export const setLogin = (email, password, rememberMe, captcha) => {
  return (dispatch) => {
    authAPI.Login(email, password, rememberMe, captcha).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(getAuth());
      } else {
        if (response.data.resultCode === 10) {
          dispatch(getCaptchaURL());
        }
        let messages = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
        dispatch(stopSubmit("login", { _error: messages }));
      }
    });
  };
};

export const getCaptchaURL = () => async (dispatch) => {
  const response = await securityAPI.getCaptcha()
  const captchaURL = response.data.url;
  dispatch(getCaptchaSuccess(captchaURL));
};

export const setLogout = () => {
  return (dispatch) => {
    authAPI.Logout().then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false));
      }
    });
  };
};

export default authReducer;
