import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import HeaderMenu from '../header-menu'
import CartMenuEmpty from './cart-menu-empty';

import {
    StyledWrapper,
    StyledHeader,
    StyledTitle,
    StyledContent,
    StyledFooter,
    StyledFooterContent,
    StyledFooterText,
    StyledFooterPrice
} from './cart-menu.styled'

const CartMenu = ({items, totalPrice}) => {
    const [isOpen, setIsOpen] = useState(false);

    items=[
        {

        },
        {

        }
    ]

    const length = items instanceof Array ? items.length : 0;

    const openHandler = () => {
        setIsOpen(true);
    }


    return (
        <HeaderMenu icon="cart-o" count={length} hasHeader={!!length} onOpen={openHandler}>
            {
                !isOpen
                ?
                null:
                length > 0
                ?
                <StyledWrapper>
                    <StyledHeader>
                        <StyledTitle>تعداد {length} کالا در سبد خرید شما</StyledTitle>
                    </StyledHeader>
                    <StyledContent>

                    </StyledContent>
                    <StyledFooter>
                        <StyledFooterContent>
                            <StyledFooterText>مبلغ قابل پرداخت</StyledFooterText>
                            <StyledFooterPrice>{`${(totalPrice || 0).toLocaleString()} ${process.env.REACT_CURRENCY_UNIT}`} </StyledFooterPrice>
                        </StyledFooterContent>
                    </StyledFooter>
                </StyledWrapper>
                :
                <CartMenuEmpty />
            }
        </HeaderMenu>
    )
}

CartMenu.propTypes = {
    totalPrice: PropTypes.number
}

export default React.memo(CartMenu)
