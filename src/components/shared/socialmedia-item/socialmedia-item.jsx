import React from "react";
import PropTypes from "prop-types";

import { StyledLink, StyledIcon } from "./socialmedia-item.styled";
import IconProvider from "../../../providers/icon/icon-provider";

const SocialMediaItem = ({ icon }) => {
  return (
    <StyledLink>
      <StyledIcon as={IconProvider} icon={icon} size="24px" />
    </StyledLink>
  );
};

SocialMediaItem.propTypes = {
  icon: PropTypes.string,
};

export default SocialMediaItem;
