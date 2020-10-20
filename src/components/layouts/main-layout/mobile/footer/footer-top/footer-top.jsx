import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import { StyledWrapper, StyledContent } from "./footer-top.styled";
import FooterButton from "./footer-button";
import FooterNavigation from "./footer-navigation";

const FooterTop = ({}) => {
  const { t } = useTranslation();
  return (
    <StyledWrapper>
      <StyledContent>
        <FooterButton title={t("iosApp")} icon="ios" />
        <FooterButton title={t("androidApp")} icon="android" />
      </StyledContent>
      <StyledContent>
        <FooterNavigation items={[t("frequentlyAskedQuestions"), t("buyMethodAndOrder"), t("paymentMethods"), t("termsOfUsePlazaCoupon"), t("privacy")]} />
        <FooterNavigation items={[t("plazaClub"), t("termsOfDelivery"), t("guarantee"), t("trackOrders"),t("plazaSellersPanel"),t("فرصت های شغلی")]} />
      </StyledContent>
    </StyledWrapper>
  );
};

FooterTop.propTypes = {};

export default FooterTop;
