import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import HeaderMenu from '../header-menu'
import Paths from '../../../../../../../utils/paths'
import ProfileContextMenu from './profile-context-menu'


const ProfileMenu = ({ isSignedIn, level, displayName, point }) => {

    isSignedIn = true;

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
            fillColor:level || 1
        }
    }

    
    
    return (
        <HeaderMenu {...config} hasHeader={true}>
            {
                isSignedIn
                ?
                <ProfileContextMenu level={level}></ProfileContextMenu>
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
    point: PropTypes.number
}

export default ProfileMenu
