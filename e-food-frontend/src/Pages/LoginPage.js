import React from 'react'
import axios from 'axios'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import CircularProgress from '@material-ui/core/CircularProgress'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import { red } from '@material-ui/core/colors'

import Nav from '../Components/Nav'
import LoginInput from '../Components/LoginInput'

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />
}

class LoginPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            errorMessage: '',
            isLoading: false,
            isSnackbarOpen: false
        }

        this.onChangeTextHandler = this.onChangeTextHandler.bind(this)
    }

    onChangeTextHandler(event, type) {
        this.setState({
            [type]: event.target.value
        })
    }

    onSubmitLoginFormHandler() {
        this.setState({ isLoading: true })

        const data = {
            email: this.state.email,
            password: this.state.password
        }

        axios({
            method: 'POST',
            url: 'http://127.0.0.1:8000/api/user/login',
            data: data
        }).then(resp => {
            this.setState({ isLoading: false })

            console.log(resp)
        })
        .catch(error => {
            this.setState({ isLoading: false })

            console.log(error.response)
        })
    }

    onCloseSnackbar(event, reason) {
        if (reason === 'clickaway') {
            return
        }

        this.setState({ isSnackbarOpen: false })
    }

    renderLoading() {
        if (this.state.isLoading) {
            return <CircularProgress style={{ color: red[800], fontSize: 5 }} />
        }

        return 'Login'
    }

    render() {
        return (
            <div className="container-fluid">
                <Snackbar open={this.state.isSnackbarOpen}  autoHideDuration={6000} onClose={(event, reason) => this.onCloseSnackbar(event, reason)} onRequestClose>
                    <Alert onClose={() => this.onCloseSnackbar()} severity="error">
                        Credenciais inválidas!
                    </Alert>
                </Snackbar>
                <Nav />
                <section className="main-content">
                    <div className="login-form">
                        <AccountCircleIcon className="user-img" style={{ fontSize: 100, color: red[600] }} />
                        <LoginInput onChangeTextHandler={this.onChangeTextHandler} email />
                        <LoginInput onChangeTextHandler={this.onChangeTextHandler} />
                        <button 
                            onClick={() => this.onSubmitLoginFormHandler()}
                            disabled={this.state.isLoading} 
                            className="login-form-submit">
                            {this.renderLoading()}
                        </button>
                    </div>
                </section>
            </div>
        )
    }
}


export default LoginPage