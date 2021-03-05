import React from 'react'

import SnackBar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'

const Notification = props => {
    const Alert = props => {
        return <MuiAlert elevation={6} variant="filled" {...props} />
    }

    return (
        <SnackBar open={props.isSnackbarOpen} autoHideDuration={6000} onClose={(event, reason) => props.onCloseSnackbar(event, reason)}>
            <Alert onClose={() => props.onCloseSnackbar()} severity="success">
                Conta criada com sucesso!
            </Alert>
        </SnackBar>
    )
}

export default Notification