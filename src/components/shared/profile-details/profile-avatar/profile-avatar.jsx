import React from "react";
import PropTypes from "prop-types";

import { StyledAvatar, StyledIcon } from "./profile-avatar.styled";
import IconProvider from "../../../../providers/icon/icon-provider";
import getUserLevelIconName from "../../../../helpers/get-user-level-icon-name";

const ProfileAvatar = ({ level }) => {

  return (
    <StyledAvatar level={level}>
      <StyledIcon as={IconProvider} icon={getUserLevelIconName(level)} size="32px" />
    </StyledAvatar>
  );
};

ProfileAvatar.propTypes = {
  level: PropTypes.number,
};

export default ProfileAvatar;
