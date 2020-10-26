import React from "react";
import PropTypes from "prop-types";

import {
  StyledWrapper,
  StyledContainer,
  StyledContent,
  StyledImgWrapper,
  StyledTitle,
  StyledLink,
  StyledImg,
  StyledColors
} from "./product-item.styled";
import ProductItemDetail from "./product-item-detail/product-item-detail";
import ProductItemColor from "./product-item-color/product-item-color";

const ProductItem = ({ title, href, imgSrc, point, offPrice, price, colors, specialOffer = false }) => {
  return (
    <StyledWrapper>
      <StyledContainer specialOffer={specialOffer}>
        <StyledContent>
          <StyledImgWrapper specialOffer={specialOffer}>
            <StyledLink to={href}>
              <StyledImg src={imgSrc} />
            </StyledLink>
          </StyledImgWrapper>
          <StyledTitle to={href}>{title}</StyledTitle>
        </StyledContent>
        <ProductItemDetail price={price} offPrice={offPrice} href={href} point={point} specialOffer={specialOffer} />
        {
          colors ?
            <StyledColors>
              <ProductItemColor type={1} />
              <ProductItemColor type={2} />
              <ProductItemColor type={3} />
              <ProductItemColor type={4} />
            </StyledColors> : ''
        }
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
