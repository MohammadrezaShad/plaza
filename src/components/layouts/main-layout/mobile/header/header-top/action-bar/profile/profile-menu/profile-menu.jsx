import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import { 
  StyledWrapper, 
  StyledHeader, 
  StyledContent, 
  StyledIcon 
} from "./profile-menu.styled";
import IconProvider from "../../../../../../../../../providers/icon/icon-provider";
import ProfileDetails from "../../../../../../../../shared/profile-details";
import ProfileMenuItem from "./profile-menu-item";
import Paths from "../../../../../../../../../utils/paths";

const ProfileMenu = ({ 
  loggedIn, 
  firstName, 
  lastName, 
  userLevel, 
  userPoint, 
  logoutHandler,
  showProfile, 
  toggleProfile }) => {

  const {t}=useTranslation()


  return (
    <StyledWrapper showProfile={showProfile}>
      <StyledHeader>
        <ProfileDetails 
        loggedIn={loggedIn} 
        logoutHandler={logoutHandler} 
        firstName={firstName} 
        lastName={lastName} 
        userLevel={userLevel} 
        userPoint={userPoint} />
        <StyledIcon as={IconProvider} icon="close" size="12px" onClick={toggleProfile} />
      </StyledHeader>
      <StyledContent>
        <ProfileMenuItem text={t('profile')} icon="user" href={Paths.home.getPath()} />
        <ProfileMenuItem text={t('club')} icon="club" href={Paths.home.getPath()} />
        <ProfileMenuItem text={t('myOrders')} icon="shopping-cart" href={Paths.home.getPath()} />
        <ProfileMenuItem text={t('signout')} icon="logout" logoutHandler={logoutHandler} />
      </StyledContent>
    </StyledWrapper>
  );
};

ProfileMenu.propTypes = {
  loggedIn: PropTypes.bool,
  logoutHandler: PropTypes.func,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  userLevel: PropTypes.number,
  userPoint: PropTypes.number,
  showProfile: PropTypes.bool,
  toggleProfile: PropTypes.func,
};

export default ProfileMenu;
