import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import {
    StyledWrapper,
    StyledOverlay,
    StyledLayout,
    StyledContainer
} from './dialog.styled'
import { createPortal } from 'react-dom'

const canUseDOM = () => {
    return !!(typeof window !== 'undefined' && window.document && window.document.createElement);
}

const Dialog = ({open, onClose, children}) => {
    const [dialogIsShow, setDialogIsShow] = useState(open);

    const closeDialog = () => {
        setDialogIsShow(false);
        onClose && onClose();
    }

    const getScrollbarWidth = () => {
        return window.innerWidth - document.documentElement.clientWidth;
    }

    useEffect(() => {
        setDialogIsShow(open)

        if (open) {
            document.body.style.paddingRight = getScrollbarWidth() + 'px'
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
            document.body.removeAttribute('style');
        }

        return () => {
            if (dialogIsShow){
                document.body.style.overflow = '';
                document.body.style.paddingRight = '';
                document.body.removeAttribute('style');
            }
        }
    }, [open])

    if (!canUseDOM()) {
        return null;
    }

    if(!dialogIsShow){
        return null;
    }

    return createPortal(
        <StyledWrapper>
            <StyledLayout>
                <StyledOverlay onClick={closeDialog} />
                <StyledContainer>
                    <div style={{height:'100px', backgroundColor:"white"}}>
                        {children}
                    </div>
                </StyledContainer>
            </StyledLayout>
        </StyledWrapper>
    , typeof document != 'undefined' ? document.getElementById('dialog') : null)
}

Dialog.propTypes = {
    children: PropTypes.node.isRequired,
    open: PropTypes.bool.isRequired
}

export default Dialog
