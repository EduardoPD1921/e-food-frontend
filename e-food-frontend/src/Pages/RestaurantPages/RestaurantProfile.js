import React from 'react'

import Nav from '../../Components/Nav'
import Footer from '../../Components/Footer/Footer'

class RestaurantProfile extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className="container-fluid" style={{ backgroundColor: 'whitesmoke' }}>
                <Nav profilePage />
                <div className="restaurant-profile-content">
                    <div className="restaurant-profile-info">
                        test
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default RestaurantProfile