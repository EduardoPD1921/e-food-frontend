import React from 'react'

import Nav from '../../Components/Nav'
import Footer from '../../Components/Footer/Footer'

import StoreIcon from '@material-ui/icons/Store'

import { red } from '@material-ui/core/colors'

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
                <div className="main-content">
                    <div className="restaurant-profile-info">
                        <div className="left-content">
                            <StoreIcon style={{ color: red[600], fontSize: 100 }} />
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