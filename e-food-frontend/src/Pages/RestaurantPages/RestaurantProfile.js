import React from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'

import Nav from '../../Components/Nav'
import Footer from '../../Components/Footer/Footer'
import InfoRow from '../../Components/InfoRow'
import Bar from '../../MaterialComponents/TabNavigation/Bar'
import TabContent from '../../MaterialComponents/TabNavigation/TabContent'
import EditInput from '../../Components/EditInput/EditInput'
import EditForm from '../../Components/EditInput'
import Notification from '../../MaterialComponents/Notification'

import Button from '@material-ui/core/Button'

import CircularProgress from '@material-ui/core/CircularProgress'

import StorefrontIcon from '@material-ui/icons/Storefront'
import SaveIcon from '@material-ui/icons/Save'

import VMasker from 'vanilla-masker'

const tokenAuth = Cookies.get('restaurantToken')

class RestaurantProfile extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            profileInfo: {},
            viewPhoneNumber: '',
            lastEmail: '',
            newEmail: '',
            nameEdit: '',
            streetEdit: '',
            numberEdit: '',
            cityEdit: '',
            stateEdit: '',
            phoneEdit: '',
            newEmailError: false,
            lastEmailError: false,
            phoneNumberError: false,
            nameError: false,
            streetError: false,
            numberError: false,
            cityError: false,
            stateError: false,
            errorMessage: '',
            emailErrorMessage: '',
            tabPosition: 0,
            isLoading: false,
            isSnackbarOpen: false
        }
    }

    componentDidMount() {
        this.openSnackBar()

        this.setState({ isLoading: true })

        axios({
            url: 'http://127.0.0.1:8000/api/restaurant/getProfileInfo',
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${tokenAuth}`
            }
        })
            .then(resp => {
                this.phoneMasker(resp.data.phone_number)

                this.setState({
                    profileInfo: resp.data,
                    viewPhoneNumber: this.viewPhoneMasked(resp.data.phone_number),
                    nameEdit: resp.data.name,
                    streetEdit: resp.data.street,
                    numberEdit: resp.data.number,
                    cityEdit: resp.data.city,
                    stateEdit: resp.data.state,
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
                <InfoRow index="Telefone" value={this.state.viewPhoneNumber} background />
            </React.Fragment>
        )
    }

    handleEditInputChange = (value, type) => {
        switch(type) {
            case 'newEmail':
                return this.setState({ newEmail: value })
            case 'lastEmail':
                return this.setState({ lastEmail: value })
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

    viewPhoneMasked = value => {
        const maskedPhone = VMasker.toPattern(value, "(99) 99999-9999")

        return maskedPhone
    }

    errorHandler = error => {
        this.setState({
            nameError: false,
            streetError: false,
            numberError: false,
            cityError: false,
            stateError: false,
            phoneNumberError: false,
            errorMessage: 'Valores inválidos!'
        })

        if (error.name) {
            this.setState({ nameError: true })
        }

        if (error.street) {
            this.setState({ streetError: true })
        }

        if (error.number) {
            this.setState({ numberError: true })
        }

        if (error.city) {
            this.setState({ cityError: true })
        }

        if (error.state) {
            this.setState({ stateError: true })
        }

        if (error.phone_number) {
            this.setState({ phoneNumberError: true })
        }
    }

    submitEditForm = () => {
        const data = {
            name: this.state.nameEdit,
            street: this.state.streetEdit,
            number: this.state.numberEdit,
            city: this.state.cityEdit,
            state: this.state.stateEdit,
            phone_number: this.state.phoneEdit
        }

        axios({
            method: 'PUT',
            url: 'http://127.0.0.1:8000/api/restaurant/updateProfile',
            headers: {
                'Authorization': `Bearer ${tokenAuth}`
            },
            data: data
        })
            .then(resp => {
                window.location.reload()
                localStorage.setItem('openSnackbar', true)
            })
            .catch(error => {
                this.errorHandler(error.response.data)
            })
    }

    submitEmailChanges = () => {
        const data = {
            lastEmail: this.state.lastEmail,
            newEmail: this.state.newEmail
        }

        axios({
            method: 'PUT',
            url: 'http://127.0.0.1:8000/api/restaurant/updateEmail',
            headers: {
                'Authorization': `Bearer ${tokenAuth}`
            },
            data: data
        })
            .then(resp => console.log(resp))
            .catch(error => console.log(error.response))
    }

    openSnackBar = () => {
        const openSnackBar = localStorage.getItem('openSnackbar')

        if (openSnackBar) {
            this.setState({ isSnackbarOpen: true })
        }

        localStorage.removeItem('openSnackbar')
    }

    onCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }

        this.setState({ isSnackbarOpen: false })
    }

    renderErrorMessage = () => {
        if (this.state.errorMessage) {
            return <span>{this.state.errorMessage}</span>
        }
    }

    renderEmailErrorMessage = () => {
        if (this.state.emailErrorMessage) {
            return <span>{this.state.emailErrorMessage}</span>
        }
    }

    render() {
        return (
            <div className="container-fluid" style={{ backgroundColor: 'whitesmoke' }}>
                <Nav profilePage />
                <div className="restaurant-profile-content">
                    <div className="appbar-container">
                        <Bar tabPosition={this.state.tabPosition} handlePositionChanged={this.handleChange} />
                            <TabContent tabPosition={this.state.tabPosition} index={0}>
                                <div className="restaurant-profile-view">
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
                                <div style={{ height: 1000 }} className="restaurant-profile-edit-page">
                                    <div className="restaurant-profile-edit">
                                        <h3 className="section-title">Informações do perfil</h3>
                                        <div className="edit-profile-item">
                                            <EditForm
                                                handleEditInputChange={this.handleEditInputChange}
                                                handlePhoneMasker={this.phoneMasker}
                                                nameValue={this.state.nameEdit}
                                                streetValue={this.state.streetEdit}
                                                numberValue={this.state.numberEdit}
                                                cityValue={this.state.cityEdit}
                                                stateValue={this.state.stateEdit}
                                                phoneValue={this.state.phoneEdit}
                                                nameError={this.state.nameError}
                                                streetError={this.state.streetError}
                                                numberError={this.state.numberError}
                                                cityError={this.state.cityError}
                                                stateError={this.state.stateError}
                                                phoneError={this.state.phoneNumberError} 
                                            />
                                            <div className="error-button">
                                                <div className="error-message">
                                                    {this.renderErrorMessage()}
                                                </div>
                                                <div className="save-changes-button">
                                                    <Button
                                                        onClick={() => this.submitEditForm()}
                                                        style={{ marginRight: 20 }}
                                                        variant="contained"
                                                        color="primary"
                                                        endIcon={<SaveIcon />}
                                                        className="submit-edit-button"
                                                    >
                                                        Salvar
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="restaurant-profile-edit-email">
                                        <h3 className="section-title">Alterar E-mail</h3>
                                        <div className="edit-profile-item">
                                            <EditInput
                                                handleEditInputChange={this.handleEditInputChange}
                                                type="email"
                                                error={this.state.lastEmailError}
                                                id="restaurantLastEmail"
                                                placeholder="E-mail atual"
                                                inputType="lastEmail"
                                            />
                                            <EditInput
                                                handleEditInputChange={this.handleEditInputChange}
                                                type="email"
                                                error={this.state.newEmailError}
                                                id="restaurantNewEmail"
                                                placeholder="Novo E-mail"
                                                inputType="newEmail"
                                            />
                                            <div className="error-button">
                                                <div className="error-message">
                                                    {this.renderEmailErrorMessage()}
                                                </div>
                                                <div className="save-changes-button">
                                                    <Button
                                                        onClick={() => this.submitEmailChanges()}
                                                        style={{ marginRight: 20 }}
                                                        variant="contained"
                                                        color="primary"
                                                        endIcon={<SaveIcon />}
                                                        className="submit-edit-button"
                                                    >
                                                        Salvar
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabContent>
                    </div>
                </div>
                <Notification message="Alterações salvas!" onCloseSnackbar={this.onCloseSnackbar} isSnackbarOpen={this.state.isSnackbarOpen} />
                <Footer />
            </div>
        )
    }
}

export default RestaurantProfile