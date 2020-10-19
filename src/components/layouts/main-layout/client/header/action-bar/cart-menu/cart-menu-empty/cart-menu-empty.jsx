import React from 'react'
import PropTypes from 'prop-types'

import {ReactComponent as CartEmptyIcon} from '../../../../../../../../assets/images/cart-empty-icon.svg'

import {
    StyledWrapper,
    StyledText
} from './cart-menu-empty.styled'

const CartMenuEmpty = props => {
    return (
        <StyledWrapper>
            <CartEmptyIcon />
            <StyledText>سبد خرید شما خالی است</StyledText>
        </StyledWrapper>
    )
}

CartMenuEmpty.propTypes = {

}

export default CartMenuEmpty
