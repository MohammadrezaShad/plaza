import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { 
    StyledLink, 
    StyledIcon, 
    StyledText 
} from "./drawer-menu-navigation.styled";
import IconProvider from "../../../../../../../../../../../providers/icon/icon-provider";

const DrawerMenuNavigation = ({ text, icon,href}) => {
  return (
    <Fragment>
      <StyledLink as={href ? Link:'div'} to={href}>
        <StyledIcon as={IconProvider} icon={icon} size="24px" />
        <StyledText>{text}</StyledText>
      </StyledLink>
    </Fragment>
  );
};

DrawerMenuNavigation.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string,
  href:PropTypes.string
};

export default DrawerMenuNavigation;
