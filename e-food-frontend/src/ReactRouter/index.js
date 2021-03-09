import React from 'react'
import Cookies from 'js-cookie'

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import MainPage from '../Pages/MainPage'
import RegisterPage from '../Pages/UserPages/RegisterPage'
import LoginPage from '../Pages/UserPages/LoginPage'

import RestaurantRegister from '../Pages/RestaurantPages/RestaurantRegister'
import RestaurantLogin from '../Pages/RestaurantPages/RestaurantLogin'
import RestaurantsPage from '../Pages/RestaurantPages/RestaurantsPage'
import RestaurantProfile from '../Pages/RestaurantPages/RestaurantProfile'

const Routes = props => {
    const userToken = Cookies.get('userToken')
    const restaurantToken = Cookies.get('restaurantToken')

    return (
        <Router>
            <Switch>
                <Route path="/" exact component={MainPage} />
                {!userToken && !restaurantToken ? <Route path="/register" exact component={RegisterPage} /> : <Redirect from="/register" to="/" />}
                {!userToken && !restaurantToken ? <Route path="/login" exact component={LoginPage} /> : <Redirect from="/login" to="/" />}
                {!userToken && !restaurantToken ? <Route path="/restaurant/register" exact component={RestaurantRegister} /> : <Redirect from="/restaurant/register" to="/" />}
                {!userToken && !restaurantToken ? <Route path="/restaurant/login" exact component={RestaurantLogin} /> : <Redirect from="/restaurant/login" to="/" />}
                {restaurantToken ? <Route path="/restaurant/profile" exact component={RestaurantProfile} /> : <Redirect from="/restaurant/profile" to="/restaurant/login" />}
                <Route path="/restaurants" exact component={RestaurantsPage} />
            </Switch>
        </Router>
    )
}

export default Routes