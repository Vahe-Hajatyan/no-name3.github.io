import { ContentAPI } from "./../api/api";

let initialState = {
  Posts: [
    { id: 1, massages: "Hi, how are you", lake: 15 },
    { id: 2, massages: "It's my first post", lake: 20 },
    { id: 4, massages: "Hello my friend", lake: 9 },
    { id: 6, massages: "barev", lake: 100 },
  ],
  content: null,
  status: "",
};
const contentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD-POSTS":
      let newPost = {
        id: 7,
        massages: action.newAddText,
        lake: 0,
      };
      return {
        ...state,
        Posts: [...state.Posts, newPost],
      };
    case "SET-USERS-CONTENT":
      return {
        ...state,
        content: action.content,
      };
    case "SET-STATUS":
      return {
        ...state,
        status: action.status,
      };
    default:
      return state;
  }
};

export const addPostCreator = (newAddText) => {
  return {
    type: "ADD-POSTS",
    newAddText: newAddText
  };
};
export const setUsersContent = (content) => {
  return {
    type: "SET-USERS-CONTENT",
    content: content,
  };
};

export const setStatus = (status) => {
  return {
    type: "SET-STATUS",
    status: status,
  };
};

export const getContent = (userId) => {
  return (dispatch) => {
    ContentAPI.getContent(userId).then((data) => {
      dispatch(setUsersContent(data));
    });
  };
};

export const getStatus = (userId) => {
  return (dispatch) => {
    ContentAPI.getStatus(userId).then((data) => {
      dispatch(setStatus(data));
    });
  };
};

export const updateStatus = (status) => {
  return (dispatch) => {
    ContentAPI.updateStatus(status).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
      }
    });
  };
};

export default contentReducer;
