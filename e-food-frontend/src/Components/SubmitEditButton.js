import React from 'react'

import Button from '@material-ui/core/Button'

import SaveIcon from '@material-ui/icons/Save'

const SubmitEditButton = props => {
    return (
        <Button
            onClick={() => props.handleClick()}
            style={{ marginRight: 20, marginBottom: 20 }}
            variant="contained"
            color="primary"
            endIcon={<SaveIcon />}
            className="submit-edit-button"
        >
            Salvar
        </Button>
    )
}

export default SubmitEditButton