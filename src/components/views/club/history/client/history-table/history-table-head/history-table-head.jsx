import React from 'react'
import PropTypes from 'prop-types'

import { StyledWrapper, StyledHead } from './history-table-head.styled'

const HistoryTableHead = ({ items }) => {
    return (
        <StyledWrapper>
            {
                items.map((item, index) => {
                    return <StyledHead key={index}>{item}</StyledHead>
                })
            }

        </StyledWrapper>
    )
}

HistoryTableHead.propTypes = {
    items: PropTypes.array
}

export default HistoryTableHead
