import React from "react";
import PropTypes from "prop-types";

import { StyledAvatar, StyledIcon } from "./profile-avatar.styled";
import IconProvider from "../../../../providers/icon/icon-provider";
import getUserLevelIconName from "../../../../helpers/get-user-level-icon-name";

const ProfileAvatar = ({ level,iconSize='32px' }) => {

  return (
    <StyledAvatar level={level} iconSize={iconSize}>
      <StyledIcon as={IconProvider} icon={getUserLevelIconName(level)} size={iconSize} />
    </StyledAvatar>
  );
};

ProfileAvatar.propTypes = {
  level: PropTypes.number,
  iconSize:PropTypes.string
};

export default ProfileAvatar;
