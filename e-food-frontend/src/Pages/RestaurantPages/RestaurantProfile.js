import React from 'react'

import Nav from '../../Components/Nav'
import Footer from '../../Components/Footer/Footer'

import StoreIcon from '@material-ui/icons/Store'

// import { red } from '@material-ui/core/colors'

class RestaurantProfile extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className="container-fluid">
                <Nav profilePage />
                <div className="restaurant-profile-screen">
                    <div className="restaurant-profile-info">
                        <div className="left-content">
                            <StoreIcon className="store-icon" style={{ color: 'white', fontSize: 100 }} />
                        </div>
                        <div className="right-content">
                            test
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default RestaurantProfile