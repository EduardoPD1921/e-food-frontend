import React from 'react'

import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import StorefrontIcon from '@material-ui/icons/Storefront'
import EditIcon from '@material-ui/icons/Edit'

const Bar = props => {
    return (
        <AppBar style={{ borderRadius: 10, marginTop: -120 }} position="static" color="default">
            <Tabs
                value={props.tabPosition}
                onChange={(event, newPosition) => props.handlePositionChanged(newPosition)}
                variant="fullWidth"
                scrollButtons="on"
                indicatorColor="primary"
                textColor="primary"
                aria-label="TabNavigator"
                centered
            >
                <Tab className="tab-option" style={{ textTransform: 'none', fontWeight: '600' }} label="Perfil" icon={<StorefrontIcon />} />
                <Tab className="tab-option" style={{ textTransform: 'none', fontWeight: '600' }} label="Editar perfil" icon={<EditIcon />} />
                <Tab className="tab-option" style={{ textTransform: 'none', fontWeight: '600' }} label="payload" icon={<EditIcon />} />
            </Tabs>
        </AppBar>
    )
}

export default Bar