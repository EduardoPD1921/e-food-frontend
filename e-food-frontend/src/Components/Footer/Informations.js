import React from 'react'

import RestaurantSection from './InfoSection/RestaurantSection'
import WorkSection from './InfoSection/WorkSection'
import HelpSection from './InfoSection/HelpSection'

const Informations = props => {
    return (
        <React.Fragment>
            <RestaurantSection />
            <WorkSection />
            <HelpSection />
        </React.Fragment>
    )
}

export default Informations