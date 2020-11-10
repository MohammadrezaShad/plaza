import React from 'react'
import PropTypes from 'prop-types'

import { StyledTooltip, StyledHeader } from './tooltip.styled'

const Tooltip = ({ text, left, top, children, title, show = true,minWidth,above }) => {
    return (
        <StyledTooltip $left={left} $top={top} show={show} $minWidth={minWidth} above={above}>
            {
                title ? <StyledHeader>{title}</StyledHeader> : null
            }
            {text}
            {children}
        </StyledTooltip>
    )
}

Tooltip.propTypes = {
    text: PropTypes.string,
    title: PropTypes.string,
    left: PropTypes.string,
    top: PropTypes.string,
    children: PropTypes.node,
    show: PropTypes.bool,
    minWidth:PropTypes.string,
    above:PropTypes.bool
}

export default Tooltip
