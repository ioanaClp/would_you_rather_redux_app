import { getInitialData } from "../utils/api";
import { receiveQuestions } from "./questions";
import { receiveUsers } from "./users";
import { showLoading, hideLoading } from "react-redux-loading";

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());

    return (
      getInitialData()
        // We want to add users and tweets to the store
        // To do that we need to dispatch some actions
        .then(({ users, questions }) => {
          dispatch(receiveUsers(users));
          dispatch(receiveQuestions(questions));
          dispatch(hideLoading());
        })
    );
  };
}
