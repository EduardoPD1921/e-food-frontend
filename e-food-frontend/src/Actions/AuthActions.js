import axios from 'axios'

export const AUTH_SUCCESS = 'AUTH_SUCCESS'
const authSuccess = user => {
    return {
        type: AUTH_SUCCESS,
        user
    }
}

export const tryAuth = (email, password) => dispatch => {
    const data = {
        email: email,
        password: password
    }

    return axios({
        method: 'POST',
        url: 'http://127.0.0.1:8000/api/user/login',
        data: data
    })
        .then(user => {
            const action = authSuccess(user.data)
            dispatch(action)

            return user.data
        })
        .catch(error => {
            return Promise.reject(error.response)
        })
}