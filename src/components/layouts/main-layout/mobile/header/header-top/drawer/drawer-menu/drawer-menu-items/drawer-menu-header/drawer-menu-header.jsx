import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { 
  StyledWrapper, 
  StyledProfile, 
  StyledIcon, 
  StyledText, 
  StyledContent,
  StyledNavigation
} from "./drawer-menu-header.styled";
import IconProvider from "../../../../../../../../../../providers/icon/icon-provider";
import WithLoginRedux from "../../../../../../../../../../hoc/with-login-redux";
import ProfileDetails from "../../../../../../../../../shared/profile-details";
import DrawerMenuNavigation from "./drawer-menu-navigation";
import Paths from "../../../../../../../../../../utils/paths";

const DrawerMenuHeader = ({ loggedIn, logoutHandler, href, text, icon, fillColor, score }) => {
  const loggedOut = () => (
    <Fragment>
      <StyledIcon as={IconProvider} icon="user" size="32px" />
      <StyledText>وارد شوید</StyledText>
    </Fragment>
  );

  return (
    <StyledWrapper>
      <StyledProfile as={loggedIn ? "div" : Link} to={href} $loggedIn={loggedIn}>
        {loggedIn ? 
        <ProfileDetails 
        loggedIn={loggedIn} 
        logoutHandler={logoutHandler} 
        text={text} 
        icon={icon} 
        fillColor={fillColor} 
        score={score} /> : loggedOut()}
      </StyledProfile>
      <StyledNavigation>
        <StyledContent>
          <DrawerMenuNavigation text="پروفایل"  icon="user" />
          <DrawerMenuNavigation text="سفارش من"  icon="shopping-cart" href={Paths.home.getPath()}/>
        </StyledContent>
        <StyledContent>
          <DrawerMenuNavigation text="باشگاه مشتریان"  icon="club" href={Paths.home.getPath()}/>
          <DrawerMenuNavigation text="خروج از حساب"  icon="logout" href={Paths.home.getPath()}/>
        </StyledContent>
      </StyledNavigation>
    </StyledWrapper>
  );
};

DrawerMenuHeader.propTypes = {
  loggedIn: PropTypes.bool,
  logoutHandler: PropTypes.func,
  href: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.string,
  fillColor: PropTypes.number,
  score: PropTypes.number,
};

export default WithLoginRedux(DrawerMenuHeader);
