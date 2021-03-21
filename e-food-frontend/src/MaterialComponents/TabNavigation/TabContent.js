import React from 'react'

import Box from '@material-ui/core/Box'

function TabPanel(props) {
    const { children, value, index } = props

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-force-tabpanel-${index}`}
            aria-labelledby={`scrollable-force-tab-${index}`}
        >
            {value === index && (
                <Box style={{ width: '99vh' }}>
                    {children}
                </Box>
            )}
        </div>
    )
}

const TabContent = props => {
    const { tabPosition, index, children } = props;

    return (
        <TabPanel value={tabPosition} index={index}>
            {children}
        </TabPanel>
    )
}

export default TabContent