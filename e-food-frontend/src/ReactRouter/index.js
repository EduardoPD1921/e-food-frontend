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
    const cookie = Cookies.get('token')

    return (
        <Router>
            <Switch>
                <Route path="/" exact component={MainPage} />
                {!cookie ? <Route path="/register" exact component={RegisterPage} /> : <Redirect from="/register" to="/" />}
                {!cookie ? <Route path="/login" exact component={LoginPage} /> : <Redirect from="/login" to="/" />}
                {!cookie ? <Route path="/restaurant/register" exact component={RestaurantRegister} /> : <Redirect from="/restaurant/register" to="/" />}
                <Route path="/restaurant/login" exact component={RestaurantLogin} />
                <Route path="/restaurants" exact component={RestaurantsPage} />
            </Switch>
        </Router>
    )
}

export default Routes