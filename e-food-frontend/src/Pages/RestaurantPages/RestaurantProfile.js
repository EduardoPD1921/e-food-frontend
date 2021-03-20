import React from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'

import Nav from '../../Components/Nav'
import Footer from '../../Components/Footer/Footer'
import InfoRow from '../../Components/InfoRow'

import CircularProgress from '@material-ui/core/CircularProgress'

import StorefrontIcon from '@material-ui/icons/Storefront'

//aba navigation test
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Box from '@material-ui/core/Box'
import HelpIcon from '@material-ui/icons/Help'

function TabPanel(props) {
    const { children, value, index } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-force-tabpanel-${index}`}
            aria-labelledby={`scrollable-force-tab-${index}`}
        >
            {value === index && (
                <Box style={{ width: '96.5vh' }}>
                    {children}
                </Box>
            )}
        </div>
    )
}

class RestaurantProfile extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            profileInfo: {},
            tabPosition: 0,
            isLoading: false,
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
                this.setState({ profileInfo: resp.data, isLoading: false })
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

    render() {
        return (
            <div className="container-fluid" style={{ backgroundColor: 'whitesmoke' }}>
                <Nav profilePage />
                <div className="restaurant-profile-content">
                    {/* <div className="restaurant-profile-info">
                        <div className="pre-info">
                            <StorefrontIcon style={{ color: "#5f56e3", fontSize: 100, marginBottom: 10 }} />
                            <span className="main-text">{this.state.profileInfo.name}</span>
                            <span className="secondary-text">{this.state.profileInfo.email}</span>
                        </div>
                        <div className="profile-info">
                            {this.renderProfileInfo()}
                        </div>
                    </div> */}
                    <div className="test">
                        <AppBar style={{ borderRadius: 10, marginTop: -120 }} position="static" color="default">
                            <Tabs
                                // style={{ marginTop: -100 }}
                                value={this.state.tabPosition}
                                onChange={(event, newValue) => this.handleChange(newValue)}
                                variant="fullWidth"
                                scrollButtons="on"
                                indicatorColor="primary"
                                textColor="primary"
                                aria-label="scrollable force tabs example"
                                centered
                            >
                                <Tab label="Perfil" icon={<StorefrontIcon />} />
                                <Tab label="Item Two" icon={<HelpIcon />} />
                                <Tab label="Item Three" icon={<HelpIcon />} />

                            </Tabs>
                        </AppBar>
                        <TabPanel value={this.state.tabPosition} index={0}>
                            <div className="restaurant-profile-info">
                                <div className="pre-info">
                                    <StorefrontIcon style={{ color: "#5f56e3", fontSize: 100, marginBottom: 10 }} />
                                    <span className="main-text">{this.state.profileInfo.name}</span>
                                    <span className="secondary-text">{this.state.profileInfo.email}</span>
                                </div>
                                <div className="profile-info">
                                    {this.renderProfileInfo()}
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel value={this.state.tabPosition} index={1}>
                            Test2
                        </TabPanel>
                        <TabPanel value={this.state.tabPosition} index={2}>
                            Test3
                        </TabPanel>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default RestaurantProfile