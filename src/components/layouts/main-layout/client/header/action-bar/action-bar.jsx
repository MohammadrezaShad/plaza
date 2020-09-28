import React from 'react'

import {
    Wrapper
} from './action-bar.styled'
import ProfileMenu from './profile-menu'

const ActionBar = () => {
    return (
        <Wrapper>
            <ProfileMenu isSignedIn={true} userLevel="green"/>
        </Wrapper>
    )
}

export default ActionBar
