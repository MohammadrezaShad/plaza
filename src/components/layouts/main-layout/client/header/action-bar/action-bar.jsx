import React, { useEffect } from 'react'

import {
    Wrapper
} from './action-bar.styled'
import CartMenu from './cart-menu'
import ProfileMenu from './profile-menu/profile-menu-container'
import WholesalingMenu from './wholesaling-menu'

const ActionBar = React.memo(() => {
    return (
        <Wrapper>
            <WholesalingMenu />
            <CartMenu/>
            <ProfileMenu isSignedIn={true}/>
        </Wrapper>
    )
})

export default ActionBar
