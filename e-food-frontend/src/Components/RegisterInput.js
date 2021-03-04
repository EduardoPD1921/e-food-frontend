import React from 'react'

import TextField from '@material-ui/core/TextField'

const RegisterInput = props => {
    return (
        <TextField 
            value={props.inputValue} 
            onChange={c => props.onChangeTextHandler(c.target.value, props.label)} 
            className="restaurant-form-input" 
            style={{ margin: 10 }} 
            label={props.label}
            type={props.password ? 'password' : 'text'}
            error={props.errorMessage ? true : false}
            helperText={props.errorMessage}
        />
    )
}

export default RegisterInput