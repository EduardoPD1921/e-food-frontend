import React from 'react'
import Cookies from 'js-cookie'

import UserMenu from '../MaterialComponents/UserMenu'
import RestaurantMenu from '../MaterialComponents/RestaurantMenu'

const Nav = props => {
    const userToken = Cookies.get('userToken')
    const restaurantToken = Cookies.get('restaurantToken')

    const renderLoginButton = () => {
        if (userToken) {
            return <UserMenu />
        }

        if (restaurantToken) {
            return <RestaurantMenu profilePage={props.profilePage ? true : false} />
        }

        if (props.mainPage) {
            return <a href="/register" id="login-btn"><span>Entrar</span></a>
        }
    }

    return (
        <nav className={props.profilePage ? "nav-profile-page" : null}>
            <div className="nav-left-align">
                <a href="/" className={`${props.profilePage ? "header-item-restaurant" : "header-item"} nav-logo`}>E-food</a>
            </div>
            <div className="nav-right-align">
                <a href="/" className={props.profilePage ? "header-item-restaurant" : "header-item"}>Home</a>
                <a href="/restaurants" className={props.profilePage ? "header-item-restaurant" : "header-item"}>Restaurantes</a>
                <a href="/" className={props.profilePage ? "header-item-restaurant" : "header-item"}>payload</a>
                {renderLoginButton()}
            </div>
        </nav>
    )
}

export default Nav