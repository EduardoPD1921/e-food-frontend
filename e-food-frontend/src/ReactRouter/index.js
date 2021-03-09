import React from 'react'
import Cookies from 'js-cookie'

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import MainPage from '../Pages/MainPage'
import RegisterPage from '../Pages/RegisterPage'
import LoginPage from '../Pages/LoginPage'
import RestaurantRegister from '../Pages/RestaurantRegister'
import RestaurantLogin from '../Pages/RestaurantLogin'
import RestaurantsPage from '../Pages/RestaurantsPage'

const Routes = props => {
    const userToken = Cookies.get('userToken')
    const restaurantToken = Cookies.get('restaurantToken')

    return (
        <Router>
            <Switch>
                <Route path="/" exact component={MainPage} />
                {!userToken || restaurantToken ? <Route path="/register" exact component={RegisterPage} /> : <Redirect from="/register" to="/" />}
                {!userToken || restaurantToken ? <Route path="/login" exact component={LoginPage} /> : <Redirect from="/login" to="/" />}
                {!userToken || restaurantToken ? <Route path="/restaurant/register" exact component={RestaurantRegister} /> : <Redirect from="/restaurant/register" to="/" />}
                {!userToken || restaurantToken ? <Route path="/restaurant/login" exact component={RestaurantLogin} /> : <Redirect from="/restaurant/login" to="/" />}
                <Route path="/restaurants" exact component={RestaurantsPage} />
            </Switch>
        </Router>
    )
}

export default Routes