import React, { useEffect } from 'react'

import {
    Wrapper
} from './action-bar.styled'
import CartMenu from './cart-menu'
import ProfileMenu from './profile-menu'
import WholesalingMenu from './wholesaling-menu'

const ActionBar = () => {
    return (
        <Wrapper>
            <WholesalingMenu />
            <CartMenu/>
            <ProfileMenu/>
        </Wrapper>
    )
}

export default ActionBar
