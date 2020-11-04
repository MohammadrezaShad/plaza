import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import { StyledWrapper } from "./profile-card-content.styled";
import CardItem from "./card-item";
import Paths from "../../../../../../utils/paths";

const ProfileCardContent = ({}) => {
  const { t } = useTranslation();
  return (
    <StyledWrapper>
      <CardItem text={t("plazaClubArea.dashboard")} href={Paths.club.home.getPath()} icon="hamburger-menu" />
      <CardItem text={t("plazaClubArea.pointGraph")} href={Paths.club.score.getPath()} icon="statistics" />
      <CardItem text={t("plazaClubArea.historyOfPointGraph")} href={Paths.club.history.getPath()} icon="history" />
      <CardItem text={t("plazaClubArea.buyTogether")} href={Paths.club.buyTogether.getPath()} icon="user" />
    </StyledWrapper>
  );
};

ProfileCardContent.propTypes = {};

export default ProfileCardContent;
