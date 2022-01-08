import { getInitialData } from "../utils/api";
import { receiveQuestions } from "./questions";
import { receiveUsers } from "./users";
import { showLoading, hideLoading } from 'react-redux-loading'
import { setAuthedUser } from "./authedUser";
import { getLoginFromLocalStorage } from "../utils/persistance"

export function handleInitialData() {
    return (dispatch) => {
        // If user was previously logged in we take that data from local storage
        const loggedInUserId = getLoginFromLocalStorage()
        if (loggedInUserId) {
            dispatch(setAuthedUser(loggedInUserId))
        }

        dispatch(showLoading())

        return getInitialData()
            // We want to add users and tweets to the store 
            // To do that we need to dispatch some actions
            .then(({ users, questions }) => {
                dispatch(receiveUsers(users))
                dispatch(receiveQuestions(questions))
                dispatch(hideLoading())
            })
    }
}