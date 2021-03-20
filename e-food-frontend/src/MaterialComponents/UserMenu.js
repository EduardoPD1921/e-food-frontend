import React from 'react'
import Cookies from 'js-cookie'

import Drawer from '@material-ui/core/Drawer'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
// import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'

import LogOutIcon from '@material-ui/icons/ExitToAppTwoTone'
import ReceiptIcon from '@material-ui/icons/Receipt'
import PersonIcon from '@material-ui/icons/Person'

import { red } from '@material-ui/core/colors'

import AccountCircleIcon from '@material-ui/icons/AccountCircle'

const UserMenu = props => {
    const [state, setState] = React.useState(false)

    const toggleDrawer = (open) => (event) => {
        setState(open)
    }

    const logout = () => {
        Cookies.remove('userToken')
        window.location.reload()
    }

    const list = () => {
        return (
            <React.Fragment>
                <List className="drawer-section">
                    <ListItem>
                        <Button
                            style={{ color: 'white', textTransform: 'none', justifyContent: 'flex-start' }}
                            className="drawer-button"
                            startIcon={<PersonIcon style={{ fill: 'white', fontSize: 25 }} />}
                            >Perfil
                        </Button>
                    </ListItem>
                    <ListItem>
                        <Button 
                            style={{ color: 'white', textTransform: 'none', justifyContent: 'flex-start' }}
                            className="drawer-button"
                            startIcon={<ReceiptIcon style={{ fill: 'white', fontSize: 25 }} />}
                            >Meus pedidos
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
                <AccountCircleIcon style={{ fontSize: 30, color: red[700] }} />
            </Button>
            <Drawer anchor="right" open={state} onClose={toggleDrawer(false)}>
                {list()}
            </Drawer>
        </React.Fragment>
    )
}

export default UserMenu