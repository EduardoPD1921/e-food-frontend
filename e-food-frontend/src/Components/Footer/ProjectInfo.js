import React from 'react'

import Button from '@material-ui/core/Button'

import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'
import GitHubIcon from '@material-ui/icons/GitHub'

const ProjectInfo = props => {
    return (
        <React.Fragment>
            <a href="/" className="footer-logo">E-food</a>
            <p>E-food é um projeto de estudo de tecnologias relacionadas ao desenvolvimento frontend e backend</p>
            <div className="social-media">
                <Button href="https://www.instagram.com/eduardo_gomes_heleno/">
                    <InstagramIcon />
                </Button>
                <Button href="https://twitter.com/duardoheleno">
                    <TwitterIcon />
                </Button>
                <Button href="https://github.com/EduardoPD1921">
                    <GitHubIcon />
                </Button>
            </div>
        </React.Fragment>
    )
}

export default ProjectInfo