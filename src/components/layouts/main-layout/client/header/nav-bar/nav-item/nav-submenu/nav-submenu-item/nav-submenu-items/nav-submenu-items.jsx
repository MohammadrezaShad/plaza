import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import {
    StyledWrapper,
    StyledTitle,
    StyledIcon,
    StyledLinkWrap,
    StyledLink
} from './nav-submenu-items.styled'
import { Link } from 'react-router-dom'
import IconProvider from '../../../../../../../../../../providers/icon/icon-provider'

const NavSubmenuItems = ({title, url, list}) => {

    return (
        <StyledWrapper>
            <StyledTitle as={url ? Link : 'span'} to={url}>{title} <StyledIcon as={IconProvider} icon="chevron-left" size="10px" /></StyledTitle>
            {
                list.map((data, index) => (
                    <StyledLinkWrap key={index}>
                        <StyledLink as={Link} to={data.url}><StyledIcon as={IconProvider} icon="chevron-left" size="10px" />{data.title}</StyledLink>
                    </StyledLinkWrap>
                ))
            }
        </StyledWrapper>
    )
}

NavSubmenuItems.propTypes = {
    title: PropTypes.string,
    url: PropTypes.string,
    list: PropTypes.array
}

export default NavSubmenuItems
