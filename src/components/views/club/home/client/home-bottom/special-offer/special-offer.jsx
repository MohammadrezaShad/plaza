import React from "react";
import PropTypes from "prop-types";

import { StyledWrapper } from "./special-offer.styled";
import Product from "../../../../../../shared/product";


const SpecialOffer = (props) => {
  return (
    <StyledWrapper>
      <Product />
    </StyledWrapper>
  );
};

SpecialOffer.propTypes = {};

export default SpecialOffer;
