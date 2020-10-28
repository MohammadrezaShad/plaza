import React from "react";
import PropTypes from "prop-types";

import { StyledContainer } from "./profile-card.styled";
import ProfileCardTop from "./profile-card-top";
import ProfileCardContent from "./profile-card-content";
import ProfileCardBottom from "./profile-card-bottom";

const ProfileCard = () => {
  return (
      <StyledContainer>
        <ProfileCardTop />
        <ProfileCardContent />
        <ProfileCardBottom />
      </StyledContainer>
  );
};

ProfileCard.propTypes = {
};

export default ProfileCard;
