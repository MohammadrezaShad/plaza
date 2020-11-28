import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import {
    StyledHead,
    StyledText,
    StyledProgress,
    StyledLayout
} from './statistics-item.styled'


const StatisticsItem = ({ title, point, max }) => {
    return (
        <Fragment>
            <StyledHead>
                <StyledText>{title}</StyledText>
                <StyledText>{point}/{max}</StyledText>
            </StyledHead>
            <StyledProgress>
                <StyledLayout progress={point/max} />
            </StyledProgress>
        </Fragment>
    )
}

StatisticsItem.propTypes = {
    title: PropTypes.string,
    point: PropTypes.number,
    max: PropTypes.number
}

export default StatisticsItem
