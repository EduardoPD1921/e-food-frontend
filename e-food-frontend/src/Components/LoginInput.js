import React from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import EmailIcon from '@material-ui/icons/Email'
import LockIcon from '@material-ui/icons/Lock'

const LoginInput = props => {
    const renderIcon = () => {
        if (props.email) {
            return <EmailIcon />
        }

        return <LockIcon />
    }

    const renderTextInput = () => {
        if (props.email) {
            return <TextField type="text" onChange={e => props.onChangeTextHandler(e, 'email')} label="Email" />
        }

        return <TextField type="password" onChange={e => props.onChangeTextHandler(e, 'password')} label="Senha" />
    }

    return (
        <Grid className="login-form-input" container spacing={1} alignItems="flex-end">
            <Grid item>
                {renderIcon()}
            </Grid>
            <Grid item>
                {renderTextInput()}
            </Grid>
        </Grid>
    )
}

export default LoginInput