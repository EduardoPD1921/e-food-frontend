import axios from 'axios'

export const tryAuth = (email, password) => dispatch => {
    const data = {
        email: email,
        password: password
    }

    // return axios({
    //     method: 'POST',
    //     url: 'http://127.0.0.1:8000/api/user/login',
    //     data:
    // })
}