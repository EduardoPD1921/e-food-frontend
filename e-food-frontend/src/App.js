import React from 'react'

import Routes from './ReactRouter'
import rootReducer from './Reducers'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reduxThunk from 'redux-thunk'

import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(reduxThunk)
))

const App = props => {
    return (
        <Provider store={store}>
            <Routes />
        </Provider>
    )
}

export default App