import React, { Fragment } from "react";
import PropTypes from "prop-types";

import { 
    StyledText, 
    StyledUserName, 
    StyledScore 
} from "./profile-details.styled";
import ProfileAvatar from "./profile-avatar";

const ProfileDetails = ({loggedIn,logoutHandler,text,icon,fillColor,score}) => {
  return (
    <Fragment>
      <ProfileAvatar fillColor={fillColor} icon={icon}/>
      <StyledText>
        <StyledUserName>{text}</StyledUserName>
        <StyledScore loggedIn={loggedIn}>امتیاز : {score}</StyledScore>
      </StyledText>
    </Fragment>
  );
};

ProfileDetails.propTypes = {
    loggedIn:PropTypes.bool,
    logoutHandler:PropTypes.func,
    text:PropTypes.string,
    icon:PropTypes.string,
    fillColor:PropTypes.number,
    score:PropTypes.number
  };

export default ProfileDetails;
