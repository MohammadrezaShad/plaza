import React from "react";
import PropTypes from "prop-types";

import { 
  StyledWrapper, 
  StyledText, 
  StyledIcon 
} from "./product-item.styled";
import IconProvider from "../../../../../../../../../../../../providers/icon/icon-provider";

const ProductItem = ({ subOptions, label, showToggle, show }) => {
  return (
    <StyledWrapper subOptions={subOptions} onClick={showToggle}>
      {
      subOptions ? <StyledIcon $show={show} 
      as={IconProvider} 
      icon="chevron-left" size="6px" /> : ""
      }
      <StyledText $show={show}>{label}</StyledText>
    </StyledWrapper>
  );
};
ProductItem.propTypes = {
  show:PropTypes.bool,
  label:PropTypes.string,
  showToggle:PropTypes.func,
  subOptions:PropTypes.number
};

export default ProductItem;
