import React from 'react'
import PropTypes from 'prop-types'

import { StyledTooltip, StyledTooltipContent } from './tooltip.styled'

const Tooltip = ({ text,left,top,children}) => {
    return (
        <StyledTooltip $left={left} $top={top}>
                     {text}
                     {children}
        </StyledTooltip>
    )
}

Tooltip.propTypes = {
    text: PropTypes.string,
    left:PropTypes.string,
    top:PropTypes.string,
    children:PropTypes.node
}

export default Tooltip
