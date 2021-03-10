import React, { useState } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'

import { Redirect } from 'react-router-dom'

import Nav from '../../Components/Nav'
import LoginInput from '../../Components/LoginInput'
import Footer from '../../Components/Footer/Footer'

import StorefrontIcon from '@material-ui/icons/Storefront'
import CircularProgress from '@material-ui/core/CircularProgress'

import { red } from '@material-ui/core/colors'

const RestaurantLogin = props => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [emailMessage, setEmailMessage] = useState('')
    const [passwordMessage, setPasswordMessage] = useState('')

    const [isLoading, setIsloading] = useState(false)
    const [redirect, setRedirect] = useState(false)

    const redirectToMainPage = () => {
        if (redirect) {
            return <Redirect from="/restaurant/login" to="/" />
        }
    }

    const onChangeTextHandler = (value, type) => {
        switch (type) {
            case 'Email':
                return setEmail(value)
            case 'Password':
                return setPassword(value)
            default:
                console.log(type)
        }
    }

    const onSubmitFormHandler = () => {
        setIsloading(true)

        const data = {
            email,
            password
        }

        axios({
            method: 'POST',
            url: 'http://127.0.0.1:8000/api/restaurant/login',
            data: data
        })
            .then(resp => {
                Cookies.set('restaurantToken', resp.data.token, { secure: true })

                setIsloading(false)
                setRedirect(true)
            })
            .catch(error => {
                setIsloading(false)
                getMessageByError(error.response.data)
            })
    }

    const getMessageByError = error => {
        setEmailMessage('')
        setPasswordMessage('')

        if (error.email) {
            setEmailMessage(error.email[0])
        }

        if (error.password) {
            setPasswordMessage(error.password[0])
        }

        if (error === 'email-not-found') {
            setEmailMessage('Email não registrado')
        }

        if (error === 'wrong-password') {
            setPasswordMessage('Senha incorreta')
        }
    }

    const renderButton = () => {
        if (isLoading) {
            return <CircularProgress color="secondary" />
        }

        return (
            <button
                onClick={() => onSubmitFormHandler()}  
                className="login-form-submit">
                Login
            </button>
        )
    }

    return (
        <div className="container-fluid">
            <Nav />
            <section className="main-content">
                <div className="login-form">
                    <StorefrontIcon className="user-img" style={{ color: red[600], fontSize: 100 }} />
                    <LoginInput onChangeTextHandler={onChangeTextHandler} errorMessage={emailMessage} label="Email" />
                    <LoginInput onChangeTextHandler={onChangeTextHandler} errorMessage={passwordMessage} label="Password" />
                    {renderButton()}
                </div>
            </section>
            <Footer />
            {redirectToMainPage()}
        </div>
    )
}

export default RestaurantLogin