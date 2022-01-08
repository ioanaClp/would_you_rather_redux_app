
import { AFTER_LOGIN_REDIRECT } from '../actions/navigation'

export default function navigation(state = null, action) {
    switch (action.type) {
        case AFTER_LOGIN_REDIRECT:
            return action.toPath
        default:
            return state
    }
}