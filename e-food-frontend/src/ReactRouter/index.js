import React from 'react'
import Cookies from 'js-cookie'

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import MainPage from '../Pages/MainPage'
import RegisterPage from '../Pages/RegisterPage'
import LoginPage from '../Pages/LoginPage'
import RestaurantRegister from '../Pages/RestaurantRegister'

const Routes = props => {
    const cookie = Cookies.get('token')

    return (
        <Router>
            <Switch>
                <Route path="/" exact component={MainPage} />
                {!cookie ? <Route path="/register" exact component={RegisterPage} /> : <Redirect from="/register" to="/" />}
                {!cookie ? <Route path="/login" exact component={LoginPage} /> : <Redirect from="/login" to="/" />}
                <Route path="/restaurant/register" exact component={RestaurantRegister} />
            </Switch>
        </Router>
    )
}

export default Routes