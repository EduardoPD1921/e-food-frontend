import React from 'react'

import Button from '@material-ui/core/Button'

import TwitterIcon from '@material-ui/icons/Twitter'

const TwitterButton = props => {
    return (
        <Button className={props.class} href="https://twitter.com/duardoheleno">
            <TwitterIcon />
        </Button>
    )
}

export default TwitterButton