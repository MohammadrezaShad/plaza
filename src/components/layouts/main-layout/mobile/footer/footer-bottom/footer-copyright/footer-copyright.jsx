import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import { StyledWrapper, StyledText } from "./footer-copyright.styled";

const FooterCopyright = ({}) => {
  const { t } = useTranslation();
  return (
    <StyledWrapper>
      <StyledText>{t("perisianCopyright")}</StyledText>
      <StyledText>{t("englishCopyright")}</StyledText>
    </StyledWrapper>
  );
};

FooterCopyright.propTypes = {};

export default FooterCopyright;
