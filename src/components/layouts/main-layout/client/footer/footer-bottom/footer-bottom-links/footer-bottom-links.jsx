import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";

import { 
  Store, 
  StoreLink, 
  StoreImage, 
  SocialMedia, 
} from "./footer-bottom-links.styled";
import GoogleImg from "../../../../../../../assets/images/google.png";
import BazarImg from "../../../../../../../assets/images/bazar.png";
import AppleImg from "../../../../../../../assets/images/apple.png";
import SocialMediaItem from "../../../../../../shared/socialmedia-item";

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
        <SocialMediaItem icon="instagram" />
        <SocialMediaItem icon="facebook" />
        <SocialMediaItem icon="twitter" />
        <SocialMediaItem icon="telegram" />
        <SocialMediaItem icon="aparat" />
      </SocialMedia>
    </Fragment>
  );
};

export default FooterBottomLinks;
