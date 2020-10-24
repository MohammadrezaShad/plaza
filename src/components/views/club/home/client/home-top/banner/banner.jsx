import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import { 
    StyledWrapper, 
    StyledContainer, 
    StyledImg 
} from "./banner.styled";
import BannerImg from "../../../../../../../assets/images/club/banner.png";

const Banner = ({}) => {
  const { t } = useTranslation();

  return (
    <StyledWrapper>
      <StyledContainer>
        <StyledImg src={BannerImg} alt={t("clubBannerAlt")} />
      </StyledContainer>
    </StyledWrapper>
  );
};

Banner.propTypes = {};

export default Banner;
