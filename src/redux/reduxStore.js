import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import contentReducer from "./contentReducer";
import massagesReducer from "./massagesReducer";
import UsersReducer from "./UsersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import appReducer from "./appReducer";

let reducers = combineReducers({
  contentPage: contentReducer,
  massagesPage: massagesReducer,
  usersPage: UsersReducer,
  auth: authReducer,
  app: appReducer,
  form: formReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;
