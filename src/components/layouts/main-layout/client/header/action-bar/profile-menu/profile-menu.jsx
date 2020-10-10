import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import HeaderMenu from '../header-menu'
import Paths from '../../../../../../../utils/paths'
import ProfileContextMenu from './profile-context-menu'


const ProfileMenu = ({ loggedIn, level, displayName, point , logoutHandler}) => {
    let config = {};
    if (!loggedIn) {
        config = {
            href: Paths.signin.getPathAndQuery(),
            text: "وارد شوید",
            icon: 'user'
        }
    } else {
        config = {
            icon: 'user',
            fillColor:level || 1
        }
    }

    
    
    return (
        <HeaderMenu {...config} hasHeader={true}>
            {
                loggedIn
                ?
                <ProfileContextMenu level={level} logoutHandler={logoutHandler}></ProfileContextMenu>
                :
                null
            }
        </HeaderMenu>
    )
}

ProfileMenu.propTypes = {
    isSignedIn: PropTypes.bool,
    userLevel: PropTypes.number,
    userDisplayName: PropTypes.string,
    point: PropTypes.number,
    logoutHandler: PropTypes.func
}

export default ProfileMenu
