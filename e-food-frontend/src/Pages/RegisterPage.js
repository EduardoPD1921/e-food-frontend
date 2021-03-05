import React from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

import Nav from '../Components/Nav'

// Material-ui components
import CircularProgress from '@material-ui/core/CircularProgress'

import illustration from '../Images/deliver.png'

class RegisterPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            password: '',
            errorMessage: '',
            isLoading: false,
            redirect: false
        }
    }

    onChangeTextHandler(event, type) {
        this.setState({
            [type]: event.target.value
        })
    }

    onSubmitFormHandler() {
        this.setState({ isLoading: true })

        const data = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        }

        axios({
            method: 'POST',
            url: 'http://127.0.0.1:8000/api/user/register',
            data: data
        }).then(resp => {
            localStorage.setItem('registerSuccess', true)
            this.setState({ isLoading: false, redirect: true })
        })
        .catch(error => {
            this.errorHandler(error.response.data)
            this.setState({ isLoading: false })
        })
    }

    renderLoading() {
        if (this.state.isLoading) {
            return <CircularProgress className="loading-animation" color="secondary" />
        }

        return <button onClick={() => this.onSubmitFormHandler()} className="form-input form-content form-submit-button">Cadastrar</button>
    }

    onCloseSnackbar(event, reason) {
        if (reason === 'clickaway') {
            return
        }

        this.setState({ isSnackbarOpen: false })
    }

    errorHandler(error) {
        this.setState({ errorMessage: this.getErrorMessageByType(error)})
    }

    getErrorMessageByType(error) {
        if (error.name) {
            return error.name[0]
        }

        if (error.email) {
            return error.email[0]
        }

        if (error.password) {
            return error.password[0]
        }
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

    redirectToMainPage = () => {
        if (this.state.redirect) {
            return <Redirect from="/register" to="/" />
        }
    }

    render() {
        return (
            <div className="container-fluid">
                <Nav />
                <div className="register-page-content">
                    <div className="content-illustration">
                        <img alt="Header" className="img-fluid" src={illustration}></img>
                    </div>
                    <div className="register-form">
                        <div className="register-inputs">
                            <span className="form-slogan">Falta pouco para matar sua fome!</span>
                            <input onChange={e => this.onChangeTextHandler(e, 'name')} className="form-input form-content" type="text" placeholder="Nome"></input>
                            <input onChange={e => this.onChangeTextHandler(e, 'email')} className="form-input form-content" type="text" placeholder="Email"></input>
                            <input onChange={e => this.onChangeTextHandler(e, 'password')} className="form-input form-content" type="password" placeholder="Senha"></input>
                            {this.renderLoading()}
                            {this.renderErrorMessage()}
                            <p>Já possui uma conta? <a href="/login" className="more-options">Faça login!</a></p>
                            <p>Quer cadastrar um restaurante? <a href="/restaurant/register" className="more-options">Cadastre agora!</a></p>
                        </div>
                    </div>
                </div>
                {this.redirectToMainPage()}
            </div>
        )
    }
}

export default RegisterPage