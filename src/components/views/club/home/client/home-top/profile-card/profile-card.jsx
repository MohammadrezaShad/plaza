import React from "react";
import PropTypes from "prop-types";

import { StyledWrapper } from "./profile-card.styled";
import ProfileCardTop from "./profile-card-top";
import ProfileCardContent from "./profile-card-content";
import ProfileCardBottom from "./profile-card-bottom";

const ProfileCard = ({}) => {
  return (
    <StyledWrapper>
      <ProfileCardTop />
      <ProfileCardContent />
      <ProfileCardBottom />
    </StyledWrapper>
  );
};

ProfileCard.propTypes = {};

export default ProfileCard;
