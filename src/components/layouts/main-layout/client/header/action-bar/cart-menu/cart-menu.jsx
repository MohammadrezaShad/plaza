import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import HeaderMenu from '../header-menu'
import CartMenuEmpty from './cart-menu-empty';

const CartMenu = ({items}) => {
    const length = items instanceof Array ? items.length : 0;

    return (
        <HeaderMenu icon="cart-o" count={length} hasHeader={!!length}>
            {
                length > 0
                ?
                null
                :
                <CartMenuEmpty />
            }
        </HeaderMenu>
    )
}

CartMenu.propTypes = {

}

export default CartMenu
