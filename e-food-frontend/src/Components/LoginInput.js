import React from 'react'

import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import EmailIcon from '@material-ui/icons/Email'
import LockIcon from '@material-ui/icons/Lock'

const LoginInput = props => {
    const renderIcon = () => {
        if (props.label === 'Email') {
            return <EmailIcon />
        }

        return <LockIcon />
    }

    return (
        <Grid className="login-form-input" container spacing={1} alignItems="flex-end">
            <Grid item>
                {renderIcon()}
            </Grid>
            <Grid item>
                <TextField 
                    type={props.label === 'Email' ? 'text' : 'password'} 
                    label={props.label} 
                    onChange={e => props.onChangeTextHandler(e.target.value, props.label)}
                    error={props.errorMessage ? true : false}
                    helperText={props.errorMessage} 
                />
            </Grid>
        </Grid>
    )
}

export default LoginInput