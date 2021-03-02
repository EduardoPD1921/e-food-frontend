import { AUTH_SUCCESS } from '../Actions'

const AuthReducer = (state = null, action) => {
    switch(action.type) {
        case AUTH_SUCCESS:
            return action.user
        default:
            return state
    }
}

export default AuthReducer