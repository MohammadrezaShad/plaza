import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import {
    Wrapper,
    Button,
    ButtonIcon,
    ButtonText,
    ButtonCount,
    ContextMenu,
    ContextMenuArrow
} from './header-menu.styled'
import { Link } from 'react-router-dom'

const HeaderMenu = ({ children, href, icon, text, fillColor, count, showWarning, hasHeader, onOpen, onClose }) => {
    const [menuIsShow, setMenuIsShow] = useState(false)
    const buttonIcon = icon ? <ButtonIcon icon={icon} size="20px" /> : null;
    const buttonText = text ? <ButtonText>{text}</ButtonText> : null;
    const buttonCount = count ? <ButtonCount>{count}</ButtonCount> : null;

    

    const documentClickHandler = () => {
        setMenuIsShow(false);
        document.removeEventListener('click', documentClickHandler)
        onClose && onClose();
    }

    const buttonClickHandler = () => {
        if (!menuIsShow) {
            document.addEventListener('click', documentClickHandler)
        } else {
            document.removeEventListener('click', documentClickHandler)
        }

        setMenuIsShow(!menuIsShow)
        if (menuIsShow) {
            onClose && onClose();
        } else {
            onOpen && onOpen();
        }
    }

    return (
        <Wrapper>
            {
                href
                ?
                <Button as={Link} to={href} warning={showWarning}>
                    {
                        buttonIcon
                    }
                    {
                        buttonText
                    }
                </Button>
                :
                <Button onClick={buttonClickHandler} fillColor={fillColor} warning={showWarning}>
                    {
                        buttonCount
                    }
                    {
                        buttonIcon
                    }
                    {
                        buttonText
                    }
                </Button>
            }
            <ContextMenuArrow show={menuIsShow} hasheader={hasHeader}/>
            <ContextMenu show={menuIsShow}>
                {children}
            </ContextMenu>
        </Wrapper>
    )
}

HeaderMenu.propTypes = {
    children: PropTypes.node,
    showWarning: PropTypes.bool
}

export default React.memo(HeaderMenu)
