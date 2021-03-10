import React from 'react'

import Nav from '../Components/Nav'
import Header from '../Components/Header'
import Notification from '../MaterialComponents/Notification'
import Footer from '../Components/Footer/Footer'

class MainPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isSnackbarOpen: false
        }
    }

    componentDidMount() {
        this.openSnackBar()
    }

    openSnackBar = () => {
        const registerSuccess = localStorage.getItem('registerSuccess')

        if (registerSuccess) {
            this.setState({ isSnackbarOpen: true })
        }
    }

    onCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }

        localStorage.removeItem('registerSuccess')
        this.setState({ isSnackbarOpen: false })
    }

    render() {
        return (
            <div className="container-fluid">
                <Nav mainPage={true} />
                <Header />
                <Notification onCloseSnackbar={this.onCloseSnackbar} isSnackbarOpen={this.state.isSnackbarOpen} />
                <Footer />
            </div>
        )
    }
}

export default MainPage