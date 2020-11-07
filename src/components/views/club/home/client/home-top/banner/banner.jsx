import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import {
  StyledWrapper,
  StyledContainer,
  StyledImg,
  StyledHashtag,
  StyledContent,
  StyledText,
  StyledIcon,
  StyledDetail,
  StyledSubText,
  StyledHashtagIcon,
  StyledHashtagText
} from "./banner.styled";
import BannerImg from "../../../../../../../assets/images/club/bannerBg.png";
import IconProvider from "../../../../../../../providers/icon/icon-provider";

const Banner = ({ }) => {
  const { t } = useTranslation();

  return (
    <StyledWrapper>
      <StyledContainer>
        <StyledImg src={BannerImg} alt={t("clubBannerAlt")} />
        <StyledHashtag>
          <StyledHashtagIcon as={IconProvider} icon="instagram" size="16px" />
          <StyledHashtagText>{t("plazaClubArea.profitHashtag")}</StyledHashtagText>
        </StyledHashtag>
        <StyledContent>
          <StyledIcon as={IconProvider} icon="club" size="85px" />
          <StyledDetail>
            <StyledText>{t("plazaClubArea.profit")}</StyledText>
            <StyledSubText>{t("plazaClubArea.clubSLogan")}</StyledSubText>
          </StyledDetail>
        </StyledContent>
      </StyledContainer>
    </StyledWrapper>
  );
};

Banner.propTypes = {};

export default Banner;
