import React, { useState } from "react";
import PropTypes from "prop-types";

import { StyledWrapper } from "./profile-card-bottom.styled";
import ProgressBar from "../../../../../../../shared/progress-bar";
import { useTranslation } from "react-i18next";
import ProfileCardPoint from "./profile-card-point";

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
