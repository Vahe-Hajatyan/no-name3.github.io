import { usersAPI } from "./../api/api";
import {updateObjectInArray} from './../utils/Helpers';


let initialState = {
  Users: [],
  pageSize: 21,
  totalItemsCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [],
};

const User = (state = initialState, action) => {
  switch (action.type) {
    case "FOLLOW":
      return {
        ...state,
        Users: updateObjectInArray(state.Users, action.userId, 'id', {followed: true})        
      };
    case "UN-FOLLOW":
      return {
        ...state,
        Users: updateObjectInArray(state.Users, action.userId, 'id', {followed: false})
      };
    case "SET-USERS":
      return {
        ...state,
        Users: action.users,
      };
    case "SET-CURRENT-PAGE":
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case "SET-USERS-TOTAL-COUNT":
      return {
        ...state,
        totalItemsCount: action.totalCount,
      };
    case "TOGGLE-IS-FETCHING":
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case "TOGGLE-IS-FOLLOWING":
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };
    default:
      return state;
  }
};

export const follow = (userId) => {
  return {
    type: "FOLLOW",
    userId: userId,
  };
};
export const unFollow = (userId) => {
  return {
    type: "UN-FOLLOW",
    userId: userId,
  };
};
export const setUsers = (users) => {
  return {
    type: "SET-USERS",
    users: users,
  };
};
export const setCurrentPage = (currentPage) => {
  return {
    type: "SET-CURRENT-PAGE",
    currentPage: currentPage,
  };
};
export const setUsersTotalCount = (totalCount) => {
  return {
    type: "SET-USERS-TOTAL-COUNT",
    totalCount: totalCount,
  };
};
export const setIsFetching = (isFetching) => {
  return {
    type: "TOGGLE-IS-FETCHING",
    isFetching: isFetching,
  };
};
export const setIsFollowing = (isFetching, userId) => {
  return {
    type: "TOGGLE-IS-FOLLOWING",
    isFetching: isFetching,
    userId: userId,
  };
};

export const getUsersThunk = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(setIsFetching(true));
    dispatch(setCurrentPage(currentPage));
    usersAPI.getUser(currentPage, pageSize).then((data) => {
      dispatch(setIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setUsersTotalCount(data.totalCount));
    });
  };
};

const FollowUnFollow = async (dispatch, id, apiMethod, actionCreator) => {

  dispatch(setIsFollowing(true, id));

  let response = await apiMethod(id);
  if (response.data.resultCode === 0) {
    dispatch(actionCreator(id));
  }
  dispatch(setIsFollowing(false, id));
  
};

export const getFollow = (id) => {
  return async (dispatch) => {
    FollowUnFollow(dispatch, id, usersAPI.follow.bind(usersAPI), follow)
  };
};

export const getUnFollow = (id) => {
  return async (dispatch) => {
    FollowUnFollow(dispatch, id, usersAPI.unfollow.bind(usersAPI), unFollow)
  };
};

export default User;
