import React from 'react'
import PropTypes from 'prop-types'

import {
    StyledTooltip,
    StyledHeader,
    StyledFooter,
    StyledText
} from './tooltip.styled'

const Tooltip = ({
    text,
    left,
    top,
    children,
    title,
    topTriangle,
    show = true,
    minWidth,
    above,
    footer
}) => {
    return (
        <StyledTooltip
            $left={left}
            $top={top}
            show={show}
            $minWidth={minWidth}
            above={above}
            topTriangle={topTriangle} >
            {
                title ? <StyledHeader>{title}</StyledHeader> : null
            }
            {
                text
                    ?
                    text instanceof Array && text.length > 0
                        ?
                        text.map((str, index) => <StyledText $isNotFirst={index > 0} key={index}>{str}</StyledText>)
                        :
                        <StyledText>{text}</StyledText>
                    :
                    null
            }
            {children}
            {footer ? <StyledFooter>{footer}</StyledFooter> : null}
        </StyledTooltip>
    )
}

Tooltip.propTypes = {
    text: PropTypes.any,
    title: PropTypes.string,
    left: PropTypes.string,
    top: PropTypes.string,
    children: PropTypes.node,
    show: PropTypes.bool,
    minWidth: PropTypes.string,
    above: PropTypes.bool,
    topTriangle: PropTypes.bool,
}

export default Tooltip
