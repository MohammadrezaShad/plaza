import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import { 
  StyledWrapper, 
  StlyedDetail, 
  StyledTitle, 
  StyledContainer, 
  StlyedLevel, 
  StyledLevelText, 
  StyledLevelValue, 
  StyledContent 
} from "./profile-card-top.styled";
import WithUserState from "../../../../hoc/with-user-state";
import { getUserLevelName } from "../../../../helpers/get-user-level-icon-name";
import { buttonSizes, buttonVariants } from "../../../../constants/button-configs";
import Button from "../../button/button";
import ProfileAvatar from "../../profile-details/profile-avatar";

const ProfileCardTop = ({ userLevel, firstName, lastName }) => {
  const { t } = useTranslation();

  return (
    <StyledWrapper>
      <StyledContent>
        <ProfileAvatar level={userLevel} iconSize='24px' />
      </StyledContent>
      <StlyedDetail>
        <StyledTitle>
          {firstName} {lastName}
        </StyledTitle>
        <StyledContainer>
          <StlyedLevel>
            <StyledLevelText>{t("yourLevel")} :   </StyledLevelText>
            <StyledLevelValue userLevel={userLevel} > {getUserLevelName(userLevel)}</StyledLevelValue>
          </StlyedLevel>
          <Button
          size={buttonSizes.SMALL} 
          variant={buttonVariants.OUTLINE} 
          text={t("increaseLevel")} 
          textWrap={false} />
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
