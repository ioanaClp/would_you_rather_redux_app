import { RECEIVE_USERS } from '../actions/users'
import { CREATE_NEW_QUESTION, ANSWER_QUESTION } from '../actions/questions'

export default function users(state = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }
        case CREATE_NEW_QUESTION: {
            const userId = action.question.author
            return {
                ...state,
                [userId]: {
                    ...state[userId],
                    questions: state[userId].questions.concat([action.question.id])
                }
            }
        }
        case ANSWER_QUESTION:
            return {
                ...state,
                [action.user.id]: {
                    ...state[action.user.id],
                    answers: {
                        ...state[action.user.id].answers,
                        [action.question.id]: action.option
                    }
                }

            }
        default:
            return state
    }
}