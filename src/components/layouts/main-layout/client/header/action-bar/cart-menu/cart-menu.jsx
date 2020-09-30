import React from 'react'
import PropTypes from 'prop-types'
import HeaderMenu from '../header-menu'

const CartMenu = () => {
    return (
        <HeaderMenu icon="cart-o" count={1}>
            <div>cart menu</div>
        </HeaderMenu>
    )
}

CartMenu.propTypes = {

}

export default CartMenu
