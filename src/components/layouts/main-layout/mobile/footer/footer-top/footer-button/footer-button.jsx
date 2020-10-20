import React from "react";
import PropTypes from "prop-types";

import { StyledWrapper, StyledText, StyledIcon } from "./footer-button.styled";
import IconProvider from "../../../../../../../providers/icon/icon-provider";

const FooterButton = ({ title, icon }) => {
  return (
    <StyledWrapper>
      <StyledIcon as={IconProvider} icon={icon} size="24px"/>
      <StyledText>{title}</StyledText>
    </StyledWrapper>
  );
};

FooterButton.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
};

export default FooterButton;
