import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import HeaderMenu from '../header-menu'
import Paths from '../../../../../../../utils/paths'
import ProfileContextMenu from './profile-context-menu'
import WithUserState from '../../../../../../../hoc/with-user-state'
import getUserLevelIconName from '../../../../../../../helpers/get-user-level-icon-name'


const ProfileMenu = ({ loggedIn, firstName, lastName, userLevel, userPoint , logoutHandler }) => {
    let config = {};
    if (!loggedIn) {
        config = {
            href: Paths.signin.getPathAndQuery(),
            text: "وارد شوید",
            icon: 'user'
        }
    } else {
        config = {
            icon: getUserLevelIconName(userLevel),
            fillColor: userLevel
        }
    }
    
    return (
        <HeaderMenu {...config} hasHeader={true}>
            {
                loggedIn
                ?
                <ProfileContextMenu logoutHandler={logoutHandler} displayName={`${firstName} ${lastName}`} level={userLevel} point={userPoint}></ProfileContextMenu>
                :
                null
            }
        </HeaderMenu>
    )
}

ProfileMenu.propTypes = {
    loggedIn: PropTypes.bool,
    firstName: PropTypes.string,
    LastName: PropTypes.string,
    userLevel: PropTypes.number,
    userPoint: PropTypes.number,
    logoutHandler: PropTypes.func
}

export default WithUserState(ProfileMenu)
