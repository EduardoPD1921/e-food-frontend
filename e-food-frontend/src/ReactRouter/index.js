import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import MainPage from '../Pages/MainPage'
import RegisterPage from '../Pages/RegisterPage'
import LoginPage from '../Pages/LoginPage'

const Routes = props => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={MainPage} />
                <Route path="/register" exact component={RegisterPage} />
                <Route path="/login" exact component={LoginPage} />
            </Switch>
        </Router>
    )
}

export default Routes