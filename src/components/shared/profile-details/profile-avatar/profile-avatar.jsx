import React from "react";
import PropTypes from "prop-types";

import { StyledAvatar, StyledIcon } from "./profile-avatar.styled";
import IconProvider from "../../../../providers/icon/icon-provider";
import userLevel from "../../../../constants/user-levels";

const ProfileAvatar = ({level}) => {

  const AvatarSwitch=(level)=>{
    switch (level) {
      case userLevel.GREEN:
        return 'user'
      case userLevel.SILVER:
        return 'silver'
      case userLevel.GOLDEN:
        return 'golden'
      case userLevel.DIAMOND:
        return 'diamond'
      default:
        return ''
    }
  }

  return (
    <StyledAvatar level={level}>
      <StyledIcon as={IconProvider} icon={AvatarSwitch(level)} size="32px" />
    </StyledAvatar>
  );
};

ProfileAvatar.propTypes = {
  level:PropTypes.number,
};

export default ProfileAvatar;
