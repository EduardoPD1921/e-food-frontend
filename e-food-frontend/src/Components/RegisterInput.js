import React from 'react'

import TextField from '@material-ui/core/TextField'

const RegisterInput = props => {
    return (
        <TextField className="restaurant-form-input" style={{ margin: 10 }} label={props.label} />
    )
}

export default RegisterInput