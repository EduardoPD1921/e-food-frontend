import React from 'react'
import Cookies from 'js-cookie'

import Drawer from '@material-ui/core/Drawer'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

import StoreIcon from '@material-ui/icons/Store'
import LogOutIcon from '@material-ui/icons/ExitToAppTwoTone'
import ReceiptIcon from '@material-ui/icons/Receipt'

import { red } from '@material-ui/core/colors'

const RestaurantMenu = props => {
    const [state, setState] = React.useState(false)

    const toggleDrawer = (open) => (event) => {
        setState(open)
    }

    const logout = () => {
        Cookies.remove('restaurantToken')
        window.location.reload()
    }

    const list = () => {
        return (
            <React.Fragment>
                <List className="drawer-section">
                    <ListItem>
                        <Button
                            href="/restaurant/profile"
                            style={{ color: 'white', textTransform: 'none', justifyContent: 'flex-start' }}
                            className="drawer-button"
                            startIcon={<StoreIcon style={{ fill: 'white', fontSize: 25 }} />}
                            >Perfil
                        </Button>
                    </ListItem>
                    <ListItem>
                        <Button 
                            style={{ color: 'white', textTransform: 'none', justifyContent: 'flex-start' }}
                            className="drawer-button"
                            startIcon={<ReceiptIcon style={{ fill: 'white', fontSize: 25 }} />}
                            >Pedidos
                        </Button>
                    </ListItem>
                </List>
                <List className="drawer-section drawer-bottom-content">
                    <ListItem>
                        <Button 
                            onClick={() => logout()}
                            style={{ color: 'white', textTransform: 'none', justifyContent: 'flex-start' }} 
                            className="drawer-button" 
                            startIcon={<LogOutIcon style={{ fill: 'white', fontSize: 25 }}
                            />}>Sair
                        </Button>
                    </ListItem>
                </List>
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <Button 
                className="account-button"
                style={{ marginRight: 10 }} 
                onClick={toggleDrawer(true)}>
                <StoreIcon style={{ fontSize: 30, color: props.profilePage ? "white" : red[700] }} />
            </Button>
            <Drawer anchor="right" open={state} onClose={toggleDrawer(false)}>
                {list()}
            </Drawer>
        </React.Fragment>
    )
}

export default RestaurantMenu