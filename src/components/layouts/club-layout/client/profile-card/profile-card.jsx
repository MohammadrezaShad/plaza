import React from "react";
import PropTypes from "prop-types";

import ProfileCardTop from "./profile-card-top";
import ProfileCardContent from "./profile-card-content";
import ProfileCardBottom from "./profile-card-bottom";
import Card from "../../../../shared/card";

const ProfileCard = () => {
  return (
      <Card>
        <ProfileCardTop />
        <ProfileCardContent />
        <ProfileCardBottom />
      </Card>
  );
};

ProfileCard.propTypes = {
};

export default ProfileCard;
