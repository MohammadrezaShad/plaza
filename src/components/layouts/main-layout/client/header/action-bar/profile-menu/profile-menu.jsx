import React from 'react'
import PropTypes from 'prop-types'
import HeaderMenu from '../header-menu'
import Paths from '../../../../../../../utils/paths'


const ProfileMenu = ({ isSignedIn, userLevel, userDisplayName, point }) => {
    let config = {};
    if (!isSignedIn) {
        config = {
            href: Paths.signin(),
            text: "وارد شوید",
            icon: 'user'
        }
    } else {
        config = {
            icon: 'user',
            fillColor:userLevel
        }
    }
    
    return (
        <HeaderMenu {...config}>
            {
                isSignedIn
                ?
                <div>submenu</div>
                :
                null
            }
        </HeaderMenu>
    )
}

ProfileMenu.propTypes = {
    isSignedIn: PropTypes.bool.isRequired,
    userLevel: PropTypes.number,
    userDisplayName: PropTypes.string,
    point: PropTypes.point
}

export default ProfileMenu
