import React from 'react'

import Button from '@material-ui/core/Button'

import GitHubIcon from '@material-ui/icons/GitHub'

const GithubButton = props => {
    return (
        <Button className={props.class} href="https://github.com/EduardoPD1921">
            <GitHubIcon />
        </Button>
    )
}

export default GithubButton