import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import { 
    StyledWrapper, 
    StyledText, 
    StyledPoint, 
    StyledMaxPoint, 
    StyledCurrentPoint, 
    StyledSeperator 
} from "./profile-card-point.styled";

const ProfileCardPoint = ({ point, maxPoint }) => {
  const { t } = useTranslation();

  return (
    <StyledWrapper>
      <StyledText>{t("plazaClubArea.yourScore")} :</StyledText>
      <StyledPoint>
        <StyledMaxPoint>{maxPoint.toLocaleString()}</StyledMaxPoint>
        <StyledSeperator>/</StyledSeperator>
        <StyledCurrentPoint>{point.toLocaleString()}</StyledCurrentPoint>
      </StyledPoint>
    </StyledWrapper>
  );
};

ProfileCardPoint.propTypes = {
  point: PropTypes.number,
  maxPoint: PropTypes.number,
};

export default ProfileCardPoint;
