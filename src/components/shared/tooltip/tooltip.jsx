import React from 'react'
import PropTypes from 'prop-types'

import { StyledTooltip, StyledHeader } from './tooltip.styled'

const Tooltip = ({ text, left, top, children,title }) => {
    return (
        <StyledTooltip $left={left} $top={top}>
            {
              title ?   <StyledHeader>{title}</StyledHeader>:null
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
    children: PropTypes.node
}

export default Tooltip
