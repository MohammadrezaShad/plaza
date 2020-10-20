import React, { useState } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import { 
  StyledWrapper, 
  StyledLink, 
  StyledLogo, 
  StyledContent, 
  StyledText,
  StyledButton
} from "./footer-detail.styled";
import Paths from "../../../../../../utils/paths";

const FooterDetail = ({}) => {
  const [showMore, setshowMore] = useState(false)
  const { t } = useTranslation();

  return (
    <StyledWrapper>
      <StyledLink to={Paths.home.getPath()}>
        <StyledLogo />
      </StyledLink>
      <StyledContent>
        <StyledText showMore={showMore}>
          {t("footerDescriptionOne")}
          <br />
          {t("footerDescriptionTwo")}
        </StyledText>
        <StyledButton onClick={()=>setshowMore(!showMore)}>
         {showMore ? t("close"):t('showMore')}
        </StyledButton>
      </StyledContent>
    </StyledWrapper>
  );
};

FooterDetail.propTypes = {};

export default FooterDetail;
