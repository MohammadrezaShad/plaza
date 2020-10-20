import React from "react";
import PropTypes from "prop-types";

import { StyledWrapper } from "./footer-socialmedia.styled";
import SocialMediaItem from "../../../../../../shared/socialmedia-item";

const FooterSocialMedia = ({}) => {
  return (
  <StyledWrapper>
        <SocialMediaItem icon="instagram" />
        <SocialMediaItem icon="facebook" />
        <SocialMediaItem icon="twitter" />
        <SocialMediaItem icon="telegram" />
        <SocialMediaItem icon="aparat" />
  </StyledWrapper>
  );
};

FooterSocialMedia.propTypes = {};

export default FooterSocialMedia;
