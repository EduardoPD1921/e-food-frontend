import React from 'react'

import ProjectInfo from './ProjectInfo'
import Informations from './Informations'

const Footer = props => {
    return (
        <div className="footer">
            <div className="footer-column">
                <ProjectInfo />
            </div>
            <div className="footer-row">
                <Informations />
            </div>
        </div>
    )
}

export default Footer