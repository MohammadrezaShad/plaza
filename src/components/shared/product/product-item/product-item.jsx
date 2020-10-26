import React from "react";
import PropTypes from "prop-types";

import {
  StyledWrapper,
  StyledContainer,
  StyledContent,
  StyledImgWrapper,
  StyledTitle,
  StyledLink,
  StyledImg
} from "./product-item.styled";
import ProductItemDetail from "./product-item-detail/product-item-detail";

const ProductItem = ({ title, href, imgSrc, point, offPrice, price }) => {
  return (
    <StyledWrapper>
      <StyledContainer>
        <StyledContent>
          <StyledImgWrapper>
            <StyledLink to={href}>
              <StyledImg src={imgSrc} />
            </StyledLink>
          </StyledImgWrapper>
          <StyledTitle to={href}>{title}</StyledTitle>
        </StyledContent>
        <ProductItemDetail price={price} offPrice={offPrice} href={href} point={point} />
      </StyledContainer>
    </StyledWrapper>
  );
};

ProductItem.propTypes = {
  price: PropTypes.number,
  offPrice: PropTypes.number,
  href: PropTypes.string,
  point: PropTypes.number
};

export default ProductItem;
