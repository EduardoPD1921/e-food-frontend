import React from 'react'

import RowIndex from './RowIndex'
import RowDivider from './RowDivider'
import RowValue from './RowValue'

const InfoRow = props => {
    return (
        <div className={`info-row ${props.background ? 'row-background-active' : null}`}>
            <RowIndex value={props.index} />
            <RowDivider />
            <RowValue value={props.value} />
        </div>
    )
}

export default InfoRow