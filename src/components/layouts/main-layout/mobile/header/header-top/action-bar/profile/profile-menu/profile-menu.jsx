import React from "react";
import PropTypes from "prop-types";

import { 
  StyledWrapper, 
  StyledHeader, 
  StyledContent, 
  StyledIcon 
} from "./profile-menu.styled";
import IconProvider from "../../../../../../../../../providers/icon/icon-provider";
import WithLoginRedux from "../../../../../../../../../hoc/with-login-redux";
import ProfileDetails from "../../../../../../../../shared/profile-details";
import ProfileMenuItem from "./profile-menu-item";
import Paths from "../../../../../../../../../utils/paths";

const ProfileMenu = ({ 
  loggedIn, logoutHandler, 
  text, 
  icon, 
  fillColor, 
  score, 
  showProfile, 
  toggleProfile }) => {

  return (
    <StyledWrapper showProfile={showProfile}>
      <StyledHeader>
        <ProfileDetails loggedIn={loggedIn} logoutHandler={logoutHandler} text={text} icon={icon} fillColor={fillColor} score={score} />
        <StyledIcon as={IconProvider} icon="close" size="12px" onClick={toggleProfile} />
      </StyledHeader>
      <StyledContent>
        <ProfileMenuItem text="پروفایل" icon="user" href={Paths.home.getPath()} />
        <ProfileMenuItem text="باشگاه مشتریان" icon="club" href={Paths.home.getPath()} />
        <ProfileMenuItem text="سفارش های من" icon="shopping-cart" href={Paths.home.getPath()} />
        <ProfileMenuItem text="خروج از حساب" icon="logout" href={Paths.home.getPath()} />
      </StyledContent>
    </StyledWrapper>
  );
};

ProfileMenu.propTypes = {
  loggedIn: PropTypes.bool,
  logoutHandler: PropTypes.func,
  href: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.string,
  fillColor: PropTypes.number,
  score: PropTypes.number,
  showProfile: PropTypes.bool,
  toggleProfile: PropTypes.func,
};

export default WithLoginRedux(ProfileMenu);
