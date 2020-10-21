import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { 
  StyledWrapper, 
  StyledLink, 
  StyledIcon ,
  StyledText
} from "./profile-menu-item.styled";
import IconProvider from "../../../../../../../../../../providers/icon/icon-provider";

const ProfileMenuItem = ({ text, icon ,href,logoutHandler}) => {
  return (
    <StyledWrapper>
      <StyledLink as={href ? Link:'div'} to={href} onClick={logoutHandler}>
        <StyledIcon as={IconProvider} icon={icon} size="20px" />
        <StyledText>{text}</StyledText>
      </StyledLink>
    </StyledWrapper>
  )
};

ProfileMenuItem.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.string,
  href:PropTypes.string,
  logoutHandler:PropTypes.func
};

export default ProfileMenuItem;
