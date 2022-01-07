import { RECEIVE_USERS } from '../actions/users'
import { CREATE_NEW_QUESTION } from '../actions/questions'

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
        default:
            return state
    }
}