import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import { 
  StyledWrapper, 
  StyledLink, 
  StyledLogo 
} from "./footer-enamad.styled";
import CommercialBusiness from "../../../../../../assets/images/mobileCommercialBusiness.png";
import OnlineBusiness from "../../../../../../assets/images/mobileOnlineBusiness.png";
import Organizing from "../../../../../../assets/images/mobileOrganizing.png";

const FooterEnamad = ({}) => {
  const { t } = useTranslation();

  return (
    <StyledWrapper>
      <StyledLink>
        <StyledLogo src={CommercialBusiness} alt={t("nationalAssociationOfVirtualBusinesses")} />
      </StyledLink>
      <StyledLink>
        <StyledLogo src={OnlineBusiness} alt={t("eCommerceDevelopmentCenter")} />
      </StyledLink>
      <StyledLink>
        <StyledLogo src={Organizing} alt={t("nationalRegistrationMark")} />
      </StyledLink>
    </StyledWrapper>
  );
};

FooterEnamad.propTypes = {};

export default FooterEnamad;
