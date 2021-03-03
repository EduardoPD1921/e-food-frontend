import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import MailIcon from '@material-ui/icons/Mail'

import AccountCircleIcon from '@material-ui/icons/AccountCircle'

const Menu = props => {
    const [state, setState] = React.useState(false)

    const toggleDrawer = (open) => (event) => {
        setState(open)
    }

    const list = () => {
        return (
            <List className="test">
                <ListItem>It works!</ListItem>
            </List>
        )
    }

    return (
        <React.Fragment>
            <Button onClick={toggleDrawer(true)}><AccountCircleIcon /></Button>
            <Drawer anchor="right" open={state} onClose={toggleDrawer(false)}>
                {list()}
            </Drawer>
        </React.Fragment>
    )
}

export default Menu