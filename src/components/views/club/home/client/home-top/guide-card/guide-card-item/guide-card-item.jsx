import React from "react";
import PropTypes from "prop-types";

import { StyledWrapper, StyledTitle, ButtonWrapper, StyledText } from "./guide-card-item.styled";
import Button from "../../../../../../../shared/button/button";
import { buttonColors, buttonSizes } from "../../../../../../../../constants/button-configs";

const GuideCardItem = ({ title, text, buttonText, buttonColor, children }) => {
  return (
    <StyledWrapper>
      <StyledTitle>{title}</StyledTitle>
      <StyledText>
      {children}
        {text}
      </StyledText>
      <ButtonWrapper>
        <Button 
        size={buttonSizes.SMALL} 
        color={!buttonColor ? 
        buttonColors.PRIMARY : buttonColors.SECONDARY} 
        text={buttonText} />
      </ButtonWrapper>
    </StyledWrapper>
  );
};

GuideCardItem.propTypes = {};

export default GuideCardItem;
