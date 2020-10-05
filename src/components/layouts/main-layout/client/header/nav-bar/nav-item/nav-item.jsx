import React from 'react'
import PropTypes from 'prop-types'

import {
    StyledWrapper,
    StyledButton,
    StyledButtonIcon,
    StyledSubmenu
} from './nav-item.styled'
import { Link } from 'react-router-dom'
import IconProvider from '../../../../../../../providers/icon/icon-provider'
import NavSubmenu from './nav-submenu'

const NavItem = ({title, to, href, list}) => {
    const hasSubmenu = (list instanceof Array && list.length > 0);

    return (
        <StyledWrapper>
            <StyledButton as={to ? Link : 'a'} to={to} href={href}>{title}{hasSubmenu ? <StyledButtonIcon as={IconProvider} icon="chevron-down" size="10"/> : null }</StyledButton>
            {
                hasSubmenu
                ? 
                <StyledSubmenu>
                    <NavSubmenu list={list} />
                </StyledSubmenu>
                : 
                null
            }
        </StyledWrapper>
    )
}

NavItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string,
    href: PropTypes.string
}

export default NavItem
