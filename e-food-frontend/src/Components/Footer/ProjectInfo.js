import React from 'react'

import InstagramButton from './Buttons/InstagramButton'
import TwitterButton from './Buttons/TwitterButton'
import GithubButton from './Buttons/GithubButton'

const ProjectInfo = props => {
    return (
        <React.Fragment>
            <a href="/" className="footer-logo">E-food</a>
            <p>E-food é um projeto de estudo de tecnologias relacionadas ao desenvolvimento frontend e backend</p>
            <div className="social-media">
                <InstagramButton class="media-icon" />
                <TwitterButton class="media-icon" />
                <GithubButton class="media-icon" />
            </div>
        </React.Fragment>
    )
}

export default ProjectInfo