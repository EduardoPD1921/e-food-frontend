const AuthReducer = (state = null, action) => {
    switch(action.type) {
        case 'USER_AUTH':
            return {
                test: 'test'
            }
        default:
            return state
    }
}

export default AuthReducer