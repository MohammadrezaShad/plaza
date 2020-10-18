import React, { Fragment, useContext } from "react";

import ProfileContext from "../../../../../../../../context/profile-context";
import IconProvider from "../../../../../../../../providers/icon/icon-provider";
import ProfileMenu from "./profile-menu";

import { 
  StyledIcon
} from "./profile.styled";

const Profile = () => {
 
 const {showProfile,toggleProfile}=useContext(ProfileContext)

  return (
  <Fragment>
    <StyledIcon as={IconProvider} icon="user" size="20px" onClick={toggleProfile} />
    <ProfileMenu showProfile={showProfile} toggleProfile={toggleProfile}/>
  </Fragment>
  )
};

export default Profile;
