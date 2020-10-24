import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import { StyledWrapper, StlyedDetail, StyledTitle, StyledContainer, StlyedLevel, StyledLevelText, StyledLevelValue } from "./profile-card-top.styled";
import ProfileAvatar from "../../../../../../../shared/profile-details/profile-avatar";
import WithUserState from "../../../../../../../../hoc/with-user-state";
import Button from "../../../../../../../shared/button/button";
import { buttonSizes, buttonVariants } from "../../../../../../../../constants/button-configs";
import { getUserLevelName } from "../../../../../../../../helpers/get-user-level-icon-name";

const ProfileCardTop = ({ userLevel, firstName, lastName }) => {
  const { t } = useTranslation();

  return (
    <StyledWrapper>
      <ProfileAvatar level={userLevel} iconSize='24px'/>
      <StlyedDetail>
        <StyledTitle>
          {firstName} {lastName}
        </StyledTitle>
        <StyledContainer>
          <StlyedLevel>
            <StyledLevelText>{t("yourLevel")} :   </StyledLevelText>
            <StyledLevelValue userLevel={userLevel} > {getUserLevelName(userLevel)}</StyledLevelValue>
          </StlyedLevel>
          <Button size={buttonSizes.SMALL} variant={buttonVariants.OUTLINE} text={t("increaseLevel")} textWrap={false}/>
        </StyledContainer>
      </StlyedDetail>
    </StyledWrapper>
  );
};

ProfileCardTop.propTypes = {
  userLevel: PropTypes.number,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
};

export default WithUserState(ProfileCardTop);
