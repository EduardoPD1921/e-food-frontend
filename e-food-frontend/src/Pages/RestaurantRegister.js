import React, { useState } from 'react'

import Nav from '../Components/Nav'
import RegisterInput from '../Components/RegisterInput'

import Lottie from 'react-lottie'
import backgroundAnimation2 from '../Animations/backgroundAnimation2.json'

import StorefrontIcon from '@material-ui/icons/Storefront'

import { red } from '@material-ui/core/colors'

import Button from '@material-ui/core/Button'

const RestaurantRegister = props => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [street, setStreet] = useState('')
    const [number, setNumber] = useState('')
    const [cep, setCep] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [phone, setPhone] = useState('')

    return (
        <div className="container-fluid">
            <Nav />
            <div className="background-animation">
                <Lottie options={{ autoplay: true, loop: true, animationData: backgroundAnimation2 }} isClickToPauseDisabled={true} />
            </div>
            <section className="main-content">
                <div className="restaurant-register-form">
                    <div className="top-content restaurant-form-content">
                        <StorefrontIcon style={{ color: red[600], fontSize: 100 }} />    
                    </div>
                    <div className="bottom-content restaurant-form-content">
                        <RegisterInput label="Email" />
                        <RegisterInput label="Nome" />
                        <RegisterInput label="Rua" />
                        <RegisterInput label="Número" />
                        <RegisterInput label="Cep" />
                        <RegisterInput label="Cidade" />
                        <RegisterInput label="Estado" />
                        <RegisterInput label="Telefone" />
                        <Button 
                            className="restaurant-form-submit" 
                            color="secondary" 
                            variant="contained" 
                            style={{ textTransform: 'none', marginTop: 20 }}>
                            Cadastrar
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default RestaurantRegister