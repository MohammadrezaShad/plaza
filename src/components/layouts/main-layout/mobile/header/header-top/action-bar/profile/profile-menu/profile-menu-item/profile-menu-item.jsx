import React from "react";
import PropTypes from "prop-types";

import { 
  StyledWrapper, 
  StyledLink, 
  StyledIcon ,
  StyledText
} from "./profile-menu-item.styled";
import IconProvider from "../../../../../../../../../../providers/icon/icon-provider";

const ProfileMenuItem = ({ text, icon ,href}) => {
  return (
    <StyledWrapper>
      <StyledLink to={href}>
        <StyledIcon as={IconProvider} icon={icon} size="20px" />
        <StyledText>{text}</StyledText>
      </StyledLink>
    </StyledWrapper>
  )
};

ProfileMenuItem.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.string,
  href:PropTypes.string
};

export default ProfileMenuItem;
