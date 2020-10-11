import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";

import {
    Store,
    StoreLink,
    StoreImage, 
    SocialMedia, 
    SocialMediaLink,
    Icon
 } from "./footer-bottom-links.styled";
import GoogleImg from "../../../../../../../assets/images/google.png";
import BazarImg from "../../../../../../../assets/images/bazar.png";
import AppleImg from "../../../../../../../assets/images/apple.png";
import IconProvider from "../../../../../../../providers/icon/icon-provider";

const FooterBottomLinks = () => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <Store>
        <StoreLink>
          <StoreImage src={BazarImg} alt={t("googleAlt")} />
        </StoreLink>
        <StoreLink>
          <StoreImage src={GoogleImg} alt={t("bazarAlt")} />
        </StoreLink>
        <StoreLink>
          <StoreImage src={AppleImg} alt={t("appleAlt")} />
        </StoreLink>
      </Store>
      <SocialMedia>
        <SocialMediaLink>
          <Icon as={IconProvider} icon="instagram" size="24px" />
        </SocialMediaLink>
        <SocialMediaLink>
          <Icon as={IconProvider} icon="twitter" size="24px" />
        </SocialMediaLink>
        <SocialMediaLink>
          <Icon as={IconProvider} icon="facebook" size="24px" />
        </SocialMediaLink>
        <SocialMediaLink>
          <Icon as={IconProvider} icon="telegram" size="24px" />
        </SocialMediaLink>
        <SocialMediaLink>
          <Icon as={IconProvider} icon="aparat" size="24px" />
        </SocialMediaLink>
      </SocialMedia>
    </Fragment>
  );
};

export default FooterBottomLinks;
