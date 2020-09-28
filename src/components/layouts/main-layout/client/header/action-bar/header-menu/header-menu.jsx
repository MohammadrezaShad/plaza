import React, { useState } from 'react'
import PropTypes from 'prop-types'

import {
    Wrapper,
    Button,
    ButtonIcon,
    ButtonText
} from './header-menu.styled'
import { Link } from 'react-router-dom'
import IconProvider from '../../../../../../../providers/icon/icon-provider'

const HeaderMenu = ({ children, href, icon, text, fillColor, count, showWarning }) => {
    const [menuIsShow, setMenuIsShow] = useState(false)

    const buttonIcon = icon ? <ButtonIcon icon={icon} size="20px" /> : null;
    const buttonText = text ? <ButtonText>{text}</ButtonText> : null;

    return (
        <Wrapper>
            {
                href
                ?
                <Button as={Link} to={href}>
                    {
                        buttonIcon
                    }
                    {
                        buttonText
                    }
                </Button>
                :
                <Button onClick={() => {setMenuIsShow(!menuIsShow)}} fillColor={fillColor}>
                    {
                        buttonIcon
                    }
                    {
                        buttonText
                    }
                </Button>
            }
            <div>
                {children}
            </div>
        </Wrapper>
    )
}

HeaderMenu.propTypes = {
    children: PropTypes.node
}

export default HeaderMenu
