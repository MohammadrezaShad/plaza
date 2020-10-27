import React, { useState } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import { StyledWrapper } from "./profile-card-bottom.styled";
import ProfileCardPoint from "./profile-card-point";
import ProgressBar from "../../progress-bar";

const ProfileCardBottom = ({}) => {
  const [point, setPoint] = useState(10000);
  const { t } = useTranslation();
  return (
    <StyledWrapper>
      <ProgressBar
      minPoint={t("plazaClubArea.minPoint")} 
      maxPoint={t("plazaClubArea.maxPoint")} 
      point={point} />
      <ProfileCardPoint maxPoint={t("plazaClubArea.maxPoint")} point={point} />
    </StyledWrapper>
  );
};

ProfileCardBottom.propTypes = {};

export default ProfileCardBottom;
