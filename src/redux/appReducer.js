import {getAuth} from './authReducer'


let initialState = {
  initialized: false
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET-INITIALIZED":
      return {
        ...state,
        initialized: true
      }
    default:
      return state;      
  }
};

export const setInitialized = () => {
  return {
    type: "SET-INITIALIZED",
  };
};

export const setInitializeApp = () => (dispatch) => {
  let promise = dispatch(getAuth());
  promise.then( () => {
    dispatch(setInitialized())
  })
};

export default appReducer;