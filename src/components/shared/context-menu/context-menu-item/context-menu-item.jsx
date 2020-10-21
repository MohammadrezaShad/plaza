import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import {
    StyledButton,
    StyledButtonIcon
} from './context-menu-item.styled'
import IconProvider from '../../../../providers/icon/icon-provider'

const ContextMenuItem = ({text, url , onClick, iconName, children}) => {
    return (
        <StyledButton onClick={onClick} as={url ? Link : null} to={url}>
            {iconName ? <StyledButtonIcon as={IconProvider} icon={iconName} size="20px" /> : null}
            {text}
            {children}
        </StyledButton>
    )
}

ContextMenuItem.propTypes = {
    text: PropTypes.string.isRequired,
    iconName: PropTypes.string,
    url: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node
}

export default ContextMenuItem
