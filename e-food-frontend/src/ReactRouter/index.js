import React from 'react'
import Cookies from 'js-cookie'

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import MainPage from '../Pages/MainPage'
import RegisterPage from '../Pages/RegisterPage'
import LoginPage from '../Pages/LoginPage'

const Routes = props => {
    const cookie = Cookies.get('token')

    return (
        <Router>
            <Switch>
                <Route path="/" exact component={MainPage} />
                {!cookie ? <Route path="/register" exact component={RegisterPage} /> : <Redirect from="/register" to="/" />}
                {!cookie ? <Route path="/login" exact component={LoginPage} /> : <Redirect from="/login" to="/" />}
            </Switch>
        </Router>
    )
}

export default Routes