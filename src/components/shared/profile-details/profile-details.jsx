import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import { 
    StyledText, 
    StyledUserName, 
    StyledScore 
} from "./profile-details.styled";
import ProfileAvatar from "./profile-avatar";

const ProfileDetails = ({loggedIn,firstName,lastName,userLevel,userPoint}) => {
  const {t}=useTranslation()

  return (
    <Fragment>
      <ProfileAvatar level={userLevel} />
      <StyledText>
        <StyledUserName>{firstName} {lastName}</StyledUserName>
        <StyledScore loggedIn={loggedIn}>{t('score')} : {userPoint}</StyledScore>
      </StyledText>
    </Fragment>
  );
};

ProfileDetails.propTypes = {
    loggedIn:PropTypes.bool,
    logoutHandler:PropTypes.func,
    firstName:PropTypes.string,
    lastName:PropTypes.string,
    userLevel:PropTypes.number,
    score:PropTypes.number
  };

export default ProfileDetails;
