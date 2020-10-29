import React from "react";
import PropTypes from "prop-types";

import { StyledWrapper, StyledLink, StyledText, StyledIcon } from "./card-item.styled";
import IconProvider from "../../../../../../../providers/icon/icon-provider";

const CardItem = ({ text, icon, href }) => {
  return (
    <StyledWrapper>
      <StyledLink exact to={href}>
        <StyledIcon>
          <IconProvider icon={icon} size="20px" />
        </StyledIcon>
        <StyledText>{text}</StyledText>
      </StyledLink>
    </StyledWrapper>
  );
};

CardItem.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default CardItem;
