import React from 'react'
import Cookies from 'js-cookie'

import UserMenu from '../MaterialComponents/UserMenu'
import RestaurantMenu from '../MaterialComponents/RestaurantMenu'

const Nav = ({ mainPage }) => {
    const userToken = Cookies.get('userToken')
    const restaurantToken = Cookies.get('restaurantToken')

    const renderLoginButton = () => {
        if (userToken) {
            return <UserMenu />
        }

        if (restaurantToken) {
            return <RestaurantMenu />
        }

        if (mainPage) {
            return <a href="/register" id="login-btn"><span>Entrar</span></a>
        }
    }

    return (
        <nav>
            <div className="nav-left-align">
                <a href="/" className="header-item nav-logo">E-food</a>
            </div>
            <div className="nav-right-align">
                <a href="/" className="header-item">Home</a>
                <a href="/restaurants" className="header-item">Restaurantes</a>
                <a href="/" className="header-item">payload</a>
                {renderLoginButton()}
            </div>
        </nav>
    )
}

export default Nav