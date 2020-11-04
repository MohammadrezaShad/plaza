import React from "react";
import PropTypes from "prop-types";

import { StyledWrapper, StyledTitle, ButtonWrapper, StyledText } from "./guide-card-item.styled";
import Button from "../button";
import { buttonColors, buttonSizes } from "../../../constants/button-configs";

const GuideCardItem = ({ title, text, buttonText, buttonColor, children,onOpen }) => {
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
        text={buttonText} 
        onClick={onOpen}
        />
      </ButtonWrapper>
    </StyledWrapper>
  );
};

GuideCardItem.propTypes = {
  title:PropTypes.string,
  text:PropTypes.string,
  onOpen:PropTypes.func,
  buttonText:PropTypes.string,
  buttonColor:PropTypes.bool,
  children:PropTypes.node
};

export default GuideCardItem;
