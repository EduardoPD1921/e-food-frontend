import React from 'react'
import Cookies from 'js-cookie'

import Drawer from '@material-ui/core/Drawer'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
// import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'

import LogOutIcon from '@material-ui/icons/ExitToAppTwoTone';

import { red } from '@material-ui/core/colors'

import AccountCircleIcon from '@material-ui/icons/AccountCircle'

const Menu = props => {
    const [state, setState] = React.useState(false)

    const toggleDrawer = (open) => (event) => {
        setState(open)
    }

    const logout = () => {
        Cookies.remove('token')
        window.location.reload()
    }

    const list = () => {
        return (
            <React.Fragment>
                <List className="drawer-section">
                    <ListItem>
                        
                    </ListItem>
                </List>
                <List className="drawer-section drawer-bottom-content">
                    <ListItem>
                        <Button 
                        onClick={() => logout()}
                        style={{ color: 'white', textTransform: 'none' }} 
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
            <Button style={{ marginRight: 10 }} onClick={toggleDrawer(true)}><AccountCircleIcon style={{ fontSize: 30, color: red[700] }} /></Button>
            <Drawer anchor="right" open={state} onClose={toggleDrawer(false)}>
                {list()}
            </Drawer>
        </React.Fragment>
    )
}

export default Menu