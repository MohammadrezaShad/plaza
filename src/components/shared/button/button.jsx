import React from 'react'
import PropTypes from 'prop-types'
import { buttonColors, buttonSizes, buttonVariants } from '../../../constants/button-configs'

import {
    StyledWrapper
} from './button.styled'

const Button = ({
    type,
    size = buttonSizes.MEDIUM, 
    variant = buttonVariants.FILL, 
    color = variant == buttonVariants.FILL ? buttonColors.PRIMARY : null,
    matchParent,
    text,
    textWrap = true,
    onClick,
    children,
    $disabled = false
}) => {
    return (
        <StyledWrapper
            type={type}
            size={size}
            variant={variant}
            color={color}
            matchParent={matchParent}
            textWrap={textWrap}
            onClick={onClick}
            $disabled={$disabled}
            >
            {text}
            {children}
        </StyledWrapper>
    )
}


Button.propTypes = {
    type: PropTypes.string,
    size: PropTypes.number,
    variant: PropTypes.number,
    color: PropTypes.number,
    text: PropTypes.string,
    children: PropTypes.node,
    matchParent: PropTypes.bool,
    textWrap:PropTypes.bool,
    onClick: PropTypes.func,
    $disabled: PropTypes.bool
}

export default Button
