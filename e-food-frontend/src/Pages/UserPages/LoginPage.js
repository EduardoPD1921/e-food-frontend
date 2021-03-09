import React from 'react'

import Cookies from 'js-cookie'

import { Redirect } from 'react-router-dom'

import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import CircularProgress from '@material-ui/core/CircularProgress'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import { red } from '@material-ui/core/colors'

import Nav from '../../Components/Nav'
import LoginInput from '../../Components/LoginInput'
import axios from 'axios'

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
            isSnackbarOpen: false,
            redirect: false
        }

        this.onChangeTextHandler = this.onChangeTextHandler.bind(this)
    }

    onChangeTextHandler(value, type) {
        switch (type) {
            case 'Email':
                return this.setState({ email: value })
            case 'Senha':
                return this.setState({ password: value })
            default:
                console.log(type)
        }
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
        })
            .then(resp => {
                Cookies.set('userToken', resp.data.token, { secure: true })

                this.setState({ isLoading: false, errorMessage: '', redirect: true })
            })
            .catch(error => {
                this.setErrorMessage(error.response.data)

                this.setState({ isLoading: false })
            })
    }

    setErrorMessage(error) {
        if (error.email) {
            return this.setState({ errorMessage: error.email[0] })
        }

        if (error.password) {
            return this.setState({ errorMessage: error.password[0] })
        }

        return this.setState({ errorMessage: error })
    }

    onCloseSnackbar(event, reason) {
        if (reason === 'clickaway') {
            return
        }

        this.setState({ isSnackbarOpen: false })
    }

    redirectToMainPage() {
        if (this.state.redirect) {
            return <Redirect from="/login" to="/" />
        }
    }

    renderLoading() {
        if (this.state.isLoading) {
            return <CircularProgress style={{ color: red[800], fontSize: 5 }} />
        }

        return 'Login'
    }

    renderErrorMessage() {
        if (this.state.errorMessage) {
            return (
                <ul>
                    <li>{this.state.errorMessage}</li>
                </ul>
            )
        }
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
                        <LoginInput onChangeTextHandler={this.onChangeTextHandler} label="Email" />
                        <LoginInput onChangeTextHandler={this.onChangeTextHandler} label="Senha" />
                        <button 
                            onClick={() => this.onSubmitLoginFormHandler()}
                            disabled={this.state.isLoading} 
                            className="login-form-submit">
                            {this.renderLoading()}
                        </button>
                        {this.renderErrorMessage()}
                    </div>
                </section>
                {this.redirectToMainPage()}
            </div>
        )
    }
}


export default LoginPage