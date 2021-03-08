import React from 'react'

import TextField from '@material-ui/core/TextField'

const RegisterInput = props => {
    const getType = () => {
        if (props.password) {
            return 'password'
        }

        if (props.file) {
            return 'file'
        }

        return 'text'
    }

    return (
        <TextField 
            value={props.inputValue} 
            onChange={c => props.onChangeTextHandler(c.target, props.label)} 
            className="restaurant-form-input" 
            style={{ margin: 10 }} 
            label={props.label}
            type={getType()}
            error={props.errorMessage ? true : false}
            helperText={props.errorMessage}
        />
    )
}

export default RegisterInput