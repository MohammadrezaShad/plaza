import React from 'react'
import PropTypes from 'prop-types'
import { buttonColors, buttonSizes, buttonVariants } from '../../../constants/button-configs'

import {
    StyledWrapper
} from './button.styled'

const Button = ({
    size = buttonSizes.MEDIUM, 
    variant = buttonVariants.FILL, 
    color = variant == buttonVariants.FILL ? buttonColors.PRIMARY : null,
    matchParent,
    text,
    textWrap=true,
    children
}) => {
    return (
        <StyledWrapper
            size={size}
            variant={variant}
            color={color}
            matchParent={matchParent}
            textWrap={textWrap}
            >
            {text}
            {children}
        </StyledWrapper>
    )
}


Button.propTypes = {
    size: PropTypes.number,
    variant: PropTypes.number,
    color: PropTypes.number,
    text: PropTypes.string,
    children: PropTypes.node,
    matchParent: PropTypes.bool,
    textWrap:PropTypes.bool
}

export default Button
