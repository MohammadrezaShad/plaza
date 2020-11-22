import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import { StyledWrapper } from "./special-offer.styled";
import Product from "../../../../../../shared/product";


const SpecialOffer = (props) => {
  const { t } = useTranslation()
  return (
    <StyledWrapper>
      <Product title={t('topRatedProduct')} />
    </StyledWrapper>
  );
};

SpecialOffer.propTypes = {};

export default SpecialOffer;
