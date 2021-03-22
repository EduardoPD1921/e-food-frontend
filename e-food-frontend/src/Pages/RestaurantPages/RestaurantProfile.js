import React from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'

import Nav from '../../Components/Nav'
import Footer from '../../Components/Footer/Footer'
import InfoRow from '../../Components/InfoRow'
import Bar from '../../MaterialComponents/TabNavigation/Bar'
import TabContent from '../../MaterialComponents/TabNavigation/TabContent'
import EditInput from '../../Components/EditInput'

import CircularProgress from '@material-ui/core/CircularProgress'

import StorefrontIcon from '@material-ui/icons/Storefront'

import VMasker from 'vanilla-masker'

class RestaurantProfile extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            profileInfo: {},
            emailEdit: '',
            nameEdit: '',
            streetEdit: '',
            numberEdit: '',
            cityEdit: '',
            stateEdit: '',
            phoneEdit: '',
            tabPosition: 0,
            isLoading: false
        }
    }

    componentDidMount() {
        this.setState({ isLoading: true })
        const tokenAuth = Cookies.get('restaurantToken')

        axios({
            url: 'http://127.0.0.1:8000/api/restaurant/getProfileInfo',
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${tokenAuth}`
            }
        })
            .then(resp => {
                // this.setState({ profileInfo: resp.data, isLoading: false })
                this.setState({
                    profileInfo: resp.data,
                    emailEdit: resp.data.email,
                    nameEdit: resp.data.name,
                    streetEdit: resp.data.street,
                    numberEdit: resp.data.number,
                    cityEdit: resp.data.city,
                    stateEdit: resp.data.state,
                    phoneEdit: resp.data.phone_number,
                    isLoading: false
                })
            })
            .catch(error => console.log(error.response))
    }

    handleChange = newValue => {
        this.setState({ tabPosition: newValue })
    }

    renderProfileInfo = () => {
        if (this.state.isLoading) {
            return <CircularProgress style={{ color: '#5f56e3'}} />
        }

        return (
            <React.Fragment>
                <InfoRow index="Nome" value={this.state.profileInfo.name} background />
                <InfoRow index="Email" value={this.state.profileInfo.email} />
                <InfoRow index="Rua" value={this.state.profileInfo.street} background />
                <InfoRow index="Número" value={this.state.profileInfo.number} />
                <InfoRow index="Cidade" value={this.state.profileInfo.city} background />
                <InfoRow index="Estado" value={this.state.profileInfo.state} />
                <InfoRow index="Telefone" value={this.state.profileInfo.phone_number} background />
            </React.Fragment>
        )
    }

    handleEditInputChange = (value, type) => {
        switch(type) {
            case 'email':
                return this.setState({ emailEdit: value })
            case 'name':
                return this.setState({ nameEdit: value })
            case 'street':
                return this.setState({ streetEdit: value })
            case 'number':
                return this.setState({ numberEdit: value })
            case 'city':
                return this.setState({ cityEdit: value })
            case 'state':
                return this.setState({ stateEdit: value })
            case 'phone':
                return this.setState({ phoneEdit: value })
            default:
                console.log(type)
        }
    }

    phoneMasker = value => {
        const maskedPhone = VMasker.toPattern(value, "(99) 99999-9999")

        this.setState({ phoneEdit: maskedPhone })
    }

    render() {
        return (
            <div className="container-fluid" style={{ backgroundColor: 'whitesmoke' }}>
                <Nav profilePage />
                <div className="restaurant-profile-content">
                    <div className="appbar-container">
                        <Bar tabPosition={this.state.tabPosition} handlePositionChanged={this.handleChange} />
                            <TabContent tabPosition={this.state.tabPosition} index={0}>
                                <div className="restaurant-profile-item">
                                    <div className="pre-info">
                                        <StorefrontIcon style={{ color: "#5f56e3", fontSize: 100, marginBottom: 10 }} />
                                        <span className="main-text">{this.state.profileInfo.name}</span>
                                        <span className="secondary-text">{this.state.profileInfo.email}</span>
                                    </div>
                                    <div className="profile-info">
                                        {this.renderProfileInfo()}
                                    </div>
                                </div>
                            </TabContent>
                            <TabContent tabPosition={this.state.tabPosition} index={1}>
                                <div style={{ height: 900 }} className="restaurant-profile-item">
                                    <div className="restaurant-profile-section">
                                        <h3 className="section-title">Informações do perfil</h3>
                                        <div className="edit-profile-item">
                                            <EditInput
                                                handleEditInputChange={this.handleEditInputChange} 
                                                type="email" 
                                                id="restaurantEmail" 
                                                placeholder="Email" 
                                                value={this.state.emailEdit}
                                                inputType="email" 
                                            />
                                            <EditInput 
                                                handleEditInputChange={this.handleEditInputChange}
                                                type="text"
                                                id="restaurantName"
                                                placeholder="Nome do restaurante"
                                                value={this.state.nameEdit}
                                                inputType="name"
                                            />
                                            <EditInput
                                                handleEditInputChange={this.handleEditInputChange} 
                                                type="text"
                                                id="restaurantStreet"
                                                placeholder="Rua"
                                                value={this.state.streetEdit}
                                                inputType="street"
                                            />
                                            <EditInput
                                                handleEditInputChange={this.handleEditInputChange}
                                                type="int"
                                                id="restaurantNumber"
                                                placeholder="Número"
                                                value={this.state.numberEdit}
                                                inputType="number" 
                                            />
                                            <EditInput 
                                                handleEditInputChange={this.handleEditInputChange}
                                                type="text"
                                                id="restaurantCity"
                                                placeholder="Cidade"
                                                value={this.state.cityEdit}
                                                inputType="city"
                                            />
                                            <EditInput 
                                                handleEditInputChange={this.handleEditInputChange}
                                                type="text"
                                                id="restaurantState"
                                                placeholder="Estado"
                                                value={this.state.stateEdit}
                                                inputType="state"
                                            />
                                            <EditInput 
                                                handleEditInputChange={this.phoneMasker}
                                                type="text"
                                                id="restaurantPhone"
                                                placeholder="Telefone"
                                                value={this.state.phoneEdit}
                                                inputType="phone"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </TabContent>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default RestaurantProfile