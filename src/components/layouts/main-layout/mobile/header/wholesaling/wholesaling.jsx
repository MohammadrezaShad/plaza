import React from "react";
import PropTypes from "prop-types";

import { 
  StyledWrapper, 
  StyledContent, 
  StyledAlertIcon, 
  StyledBoldText, 
  StyledArrowIcon, 
  StyledText 
} from "./wholesaling.styled";
import IconProvider from "../../../../../../providers/icon/icon-provider";
import { useTranslation } from "react-i18next";

const Wholesaling = ({ error }) => {
  const { t } = useTranslation();
  return (
    <StyledWrapper>
      <StyledContent>
        <StyledAlertIcon error={error} as={IconProvider} icon={error ? "alert" : "true"} size="24px" />
        <StyledBoldText>تکنوگیل</StyledBoldText>
        <StyledArrowIcon as={IconProvider} icon="chevron-left" size="6px" />
      </StyledContent>
      <StyledContent>
        <StyledText error={error}>{t('requestStatus')}</StyledText>
      </StyledContent>
    </StyledWrapper>
  );
};

Wholesaling.prototype = {};

export default Wholesaling;
