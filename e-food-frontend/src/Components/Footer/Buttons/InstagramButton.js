import React from 'react'

import Button from '@material-ui/core/Button'

import InstagramIcon from '@material-ui/icons/Instagram'

const InstagramButton = props => {
    return (
        <Button className={props.class} href="https://www.instagram.com/eduardo_gomes_heleno/">
            <InstagramIcon />
        </Button>
    )
}

export default InstagramButton