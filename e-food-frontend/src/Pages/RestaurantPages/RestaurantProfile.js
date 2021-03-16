import React from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'

import Nav from '../../Components/Nav'
import Footer from '../../Components/Footer/Footer'
import InfoRow from '../../Components/InfoRow'

import StorefrontIcon from '@material-ui/icons/Storefront'

class RestaurantProfile extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            profileInfo: {}
        }
    }

    componentDidMount() {
        const tokenAuth = Cookies.get('restaurantToken')

        axios({
            url: 'http://127.0.0.1:8000/api/restaurant/getProfileInfo',
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${tokenAuth}`
            }
        })
            .then(resp => {
                this.setState({ profileInfo: resp.data })
            })
            .catch(error => console.log(error.response))
    }

    render() {
        return (
            <div className="container-fluid" style={{ backgroundColor: 'whitesmoke' }}>
                <Nav profilePage />
                <div className="restaurant-profile-content">
                    <div className="restaurant-profile-info">
                        <div className="pre-info">
                            <StorefrontIcon style={{ color: "#5f56e3", fontSize: 100, marginBottom: 10 }} />
                            <span className="main-text">{this.state.profileInfo.name}</span>
                            <span className="secondary-text">{this.state.profileInfo.email}</span>
                        </div>
                        <div className="profile-info">
                            <InfoRow index="Nome" value={this.state.profileInfo.name} background />
                            <InfoRow index="Email" value={this.state.profileInfo.email} />
                            <InfoRow index="Rua" value={this.state.profileInfo.street} background />
                            <InfoRow index="Número" value={this.state.profileInfo.number} />
                            <InfoRow index="Cidade" value={this.state.profileInfo.city} background />
                            <InfoRow index="Estado" value={this.state.profileInfo.state} />
                            <InfoRow index="Telefone" value={this.state.profileInfo.phone_number} background />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default RestaurantProfile