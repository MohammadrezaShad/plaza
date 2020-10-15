import React from "react";
import PropTypes from "prop-types";

import { StyledAvatar, StyledIcon } from "./profile-avatar.styled";
import IconProvider from "../../../../providers/icon/icon-provider";

const ProfileAvatar = ({ fillColor, icon }) => {
  return (
    <StyledAvatar fillColor={fillColor}>
      <StyledIcon as={IconProvider} icon={icon} size="32px" />
    </StyledAvatar>
  );
};

ProfileAvatar.propTypes = {
    icon:PropTypes.string,
    fillColor:PropTypes.number,
};

export default ProfileAvatar;
