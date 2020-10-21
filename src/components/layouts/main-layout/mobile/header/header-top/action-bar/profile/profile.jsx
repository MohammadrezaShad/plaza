import React, { Fragment, useContext } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import { useHistory } from 'react-router-dom'

import ProfileContext from "../../../../../../../../context/profile-context";
import IconProvider from "../../../../../../../../providers/icon/icon-provider";
import ProfileMenu from "./profile-menu";
import WithUserState from "../../../../../../../../hoc/with-user-state";
import { StyledIcon } from "./profile.styled";
import Paths from "../../../../../../../../utils/paths";

const Profile = ({ 
  loggedIn, 
  firstName, 
  lastName, 
  userLevel, 
  userPoint, 
  logoutHandler }) => {
  const { showProfile, toggleProfile } = useContext(ProfileContext);
  const history=useHistory()

  return (
    <Fragment>
      <StyledIcon 
      as={IconProvider} 
      icon="user" 
      size="20px" 
      onClick={loggedIn ? 
      toggleProfile:()=>history.push(Paths.signin.getPath())} />
      
      {loggedIn ? 
      <ProfileMenu 
      loggedIn={loggedIn} 
      firstName={firstName} 
      lastName={lastName} 
      userPoint={userPoint} 
      userLevel={userLevel} 
      logoutHandler={logoutHandler} 
      showProfile={showProfile} 
      toggleProfile={toggleProfile} /> : null}
    </Fragment>
  );
};

Profile.propTypes = {
  loggedIn: PropTypes.bool,
  logoutHandler: PropTypes.func,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  userLevel: PropTypes.number,
  userPoint: PropTypes.number,
  showProfile: PropTypes.bool,
  toggleProfile: PropTypes.func,
};
export default WithUserState(Profile);
