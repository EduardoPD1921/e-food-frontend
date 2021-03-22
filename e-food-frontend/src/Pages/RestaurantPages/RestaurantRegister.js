import React, { useState } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

import Nav from '../../Components/Nav'
import RegisterInput from '../../Components/RegisterInput'

import Lottie from 'react-lottie'
import backgroundAnimation2 from '../../Animations/backgroundAnimation2.json'

import StorefrontIcon from '@material-ui/icons/Storefront'

import { red } from '@material-ui/core/colors'

import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'

import VMasker from 'vanilla-masker'

const RestaurantRegister = props => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [street, setStreet] = useState('')
    const [number, setNumber] = useState('')
    const [cep, setCep] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [phone, setPhone] = useState('')

    const [emailMessage, setEmailMessage] = useState('')
    const [nameMessage, setNameMessage] = useState('')
    const [passwordMessage, setPasswordMessage] = useState('')
    const [streetMessage, setStreetMessage] = useState('')
    const [numberMessage, setNumberMessage] = useState('')
    const [cepMessage, setCepMessage] = useState('')
    const [cityMessage, setCityMessage] = useState('')
    const [stateMessage, setStateMessage] = useState('')
    const [phoneMessage, setPhoneMessage] = useState('')

    const [isLoading, setIsLoading] = useState(false)
    const [redirect, setRedirect] = useState(false)
    
    const cepMasker = char => {
        const maskedValue = VMasker.toPattern(char.value, "99999-999")

        setCep(maskedValue)
    }

    const phoneMasker = char => {
        const maskedValue = VMasker.toPattern(char.value, "(99) 99999-9999")

        setPhone(maskedValue)
    }

    const onChangeTextHandler = (char, label) => {
        switch (label) {
            case 'Email':
                return setEmail(char.value)
            case 'Nome':
                return setName(char.value)
            case 'Senha':
                return setPassword(char.value)
            case 'Rua':
                return setStreet(char.value)
            case 'Número':
                return setNumber(char.value)
            case 'Cidade':
                return setCity(char.value)
            case 'Estado':
                return setState(char.value)
            default: console.log(label)
        }
    }

    const onSubmitRegisterFormHandler = () => {
        setIsLoading(true)

        const phoneUnmasked = VMasker.toPattern(phone, "99999999999")

        const data = new FormData()

        data.append('email', email)
        data.append('name', name)
        data.append('password', password)
        data.append('street', street)
        data.append('number', number)
        data.append('cep', cep)
        data.append('city', city)
        data.append('state', state)
        data.append('phone_number', phoneUnmasked)

        axios({
            method: 'POST',
            url: 'http://127.0.0.1:8000/api/restaurant/register',
            data: data
        })
            .then(resp => {
                setIsLoading(false)
                localStorage.setItem('registerSuccess', true)
                setRedirect(true)
                console.log(resp)
            })
            .catch(error => {
                setIsLoading(false)
                onSubmitErrorHandler(error.response.data)
            })
    }

    const onSubmitErrorHandler = error => {
        setEmailMessage('')
        setNameMessage('')
        setPasswordMessage('')
        setStateMessage('')
        setNameMessage('')
        setCepMessage('')
        setCityMessage('')
        setStateMessage('')
        setPhoneMessage('')

        if (error.email) {
            setEmailMessage(error.email[0])
        }

        if (error.name) {
            setNameMessage(error.name[0])
        }

        if (error.password) {
            setPasswordMessage(error.password[0])
        }

        if (error.street) {
            setStreetMessage(error.street[0])
        }

        if (error.number) {
            setNumberMessage(error.number[0])
        }

        if (error.cep) {
            setCepMessage(error.cep[0])
        }

        if (error.city) {
            setCityMessage(error.city[0])
        }

        if (error.state) {
            setStateMessage(error.state[0])
        }

        if (error.phone_number) {
            setPhoneMessage(error.phone_number[0])
        }
    }

    const renderButton = () => {
        if (isLoading) {
            return <CircularProgress color="secondary" />
        }

        return (
            <Button
                onClick={() => onSubmitRegisterFormHandler()}
                className="restaurant-form-submit" 
                color="secondary" 
                variant="contained" 
                style={{ textTransform: 'none', marginTop: 20 }}>
                Cadastrar
            </Button>
        )
    }

    const redirectToMainPage = () => {
        if (redirect) {
            return <Redirect from="/restaurant/register" to="/" />
        }
    }

    return (
        <div className="container-fluid">
            <Nav />
            <div className="background-animation">
                <Lottie options={{ autoplay: true, loop: true, animationData: backgroundAnimation2 }} isClickToPauseDisabled={true} />
            </div>
            <section className="main-content">
                <div className="restaurant-register-form">
                    <div className="top-content restaurant-form-content">
                        <a href="/restaurant/login" className="enter-as-restaurant">Entrar como um restaurante</a>
                        <StorefrontIcon style={{ color: red[600], fontSize: 100 }} />    
                    </div>
                    <div className="bottom-content restaurant-form-content">
                        <RegisterInput inputValue={email} onChangeTextHandler={onChangeTextHandler} errorMessage={emailMessage} label="Email" />
                        <RegisterInput inputValue={name} onChangeTextHandler={onChangeTextHandler} errorMessage={nameMessage} label="Nome" />
                        <RegisterInput password inputValue={password} onChangeTextHandler={onChangeTextHandler} errorMessage={passwordMessage} label="Senha" />
                        <RegisterInput inputValue={street} onChangeTextHandler={onChangeTextHandler} errorMessage={streetMessage} label="Rua" />
                        <RegisterInput inputValue={number} onChangeTextHandler={onChangeTextHandler} errorMessage={numberMessage} label="Número" />
                        <RegisterInput inputValue={cep} onChangeTextHandler={cepMasker} errorMessage={cepMessage} label="Cep" />
                        <RegisterInput inputValue={city} onChangeTextHandler={onChangeTextHandler} errorMessage={cityMessage} label="Cidade" />
                        <RegisterInput inputValue={state} onChangeTextHandler={onChangeTextHandler} errorMessage={stateMessage} label="Estado" />
                        <RegisterInput inputValue={phone} onChangeTextHandler={phoneMasker} errorMessage={phoneMessage} label="Telefone" />
                        {renderButton()}
                    </div>
                </div>
            </section>
            {redirectToMainPage()}
        </div>
    )
}

export default RestaurantRegister