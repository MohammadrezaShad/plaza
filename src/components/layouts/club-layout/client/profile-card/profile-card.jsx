import React from "react";
import PropTypes from "prop-types";

import ProfileCardTop from "./profile-card-top";
import ProfileCardContent from "./profile-card-content";
import ProfileCardBottom from "./profile-card-bottom";
import Panel from "../../../../shared/panel";

const ProfileCard = () => {
  return (
      <Panel>
        <ProfileCardTop />
        <ProfileCardContent />
        <ProfileCardBottom />
      </Panel>
  );
};

ProfileCard.propTypes = {
};

export default ProfileCard;
