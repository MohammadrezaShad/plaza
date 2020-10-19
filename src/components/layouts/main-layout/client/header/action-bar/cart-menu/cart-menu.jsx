import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import HeaderMenu from '../header-menu'

const CartMenu = ({items}) => {
    const length = items instanceof Array ? items.length : 0;

    return (
        <HeaderMenu icon="cart-o" count={length} hasHeader={!!length}>
            <Fragment>
                {
                    length > 0
                    ?
                    null
                    :
                    "empty"
                }
            </Fragment>
        </HeaderMenu>
    )
}

CartMenu.propTypes = {

}

export default CartMenu
