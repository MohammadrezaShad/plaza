import React from "react";
import PropTypes from "prop-types";

import { StyledWrapper, StyledContainer } from "./profile-card.styled";
import ProfileCardTop from "./profile-card-top";
import ProfileCardContent from "./profile-card-content";
import ProfileCardBottom from "./profile-card-bottom";

const ProfileCard = ({alignSelf}) => {
  return (
    <StyledWrapper alignSelf={alignSelf}>
      <StyledContainer>
        <ProfileCardTop />
        <ProfileCardContent />
        <ProfileCardBottom />
      </StyledContainer>
    </StyledWrapper>
  );
};

ProfileCard.propTypes = {
  alignSelf:PropTypes.string
};

export default ProfileCard;
