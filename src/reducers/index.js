import { combineReducers } from "redux";
import authedUser from "./authedUser";
import questions from "./questions";
import users from "./users";
import navigation from "./navigation";
import { loadingBarReducer } from "react-redux-loading";

export default combineReducers({
  authedUser,
  questions,
  users,
  navigation,
  loadingBar: loadingBarReducer,
});
