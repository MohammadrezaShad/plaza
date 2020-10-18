import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { 
  StyledWrapper, 
  StyledProfile, 
  StyledIcon, 
  StyledText, 
  StyledContent,
  StyledNavigation
} from "./drawer-menu-header.styled";
import IconProvider from "../../../../../../../../../../providers/icon/icon-provider";
import WithUserState from "../../../../../../../../../../hoc/with-user-state";
import ProfileDetails from "../../../../../../../../../shared/profile-details";
import DrawerMenuNavigation from "./drawer-menu-navigation";
import Paths from "../../../../../../../../../../utils/paths";

const DrawerMenuHeader = ({ loggedIn,firstName,lastName,userLevel,userPoint,logoutHandler  }) => {
  const {t}=useTranslation()
  const loggedOut = () => (
    <Fragment>
      <StyledIcon as={IconProvider} icon="user" size="32px" />
      <StyledText>{t('signIn')}</StyledText>
    </Fragment>
  );

  return (
    <StyledWrapper>
      <StyledProfile as={loggedIn ? "div" : Link} to={Paths.home.getPath()} $loggedIn={loggedIn}>
        {loggedIn ? 
        <ProfileDetails 
        loggedIn={loggedIn} 
        logoutHandler={logoutHandler} 
        firstName={firstName} 
        lastName={lastName}
        userLevel={userLevel} 
        userPoint={userPoint} /> : loggedOut()}
      </StyledProfile>
      <StyledNavigation>
        <StyledContent>
          <DrawerMenuNavigation text={t('profile')}  icon="user" />
          <DrawerMenuNavigation text={t('myOrders')} icon="shopping-cart" href={Paths.home.getPath()}/>
        </StyledContent>
        <StyledContent>
          <DrawerMenuNavigation text={t('club')}   icon="club" href={Paths.home.getPath()}/>
          <DrawerMenuNavigation text={t('signout')}  icon="logout" href={Paths.home.getPath()}/>
        </StyledContent>
      </StyledNavigation>
    </StyledWrapper>
  );
};

DrawerMenuHeader.propTypes = {
  loggedIn: PropTypes.bool,
  logoutHandler: PropTypes.func,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  userLevel: PropTypes.number,
  userPoint: PropTypes.number,
};

export default WithUserState(DrawerMenuHeader);
