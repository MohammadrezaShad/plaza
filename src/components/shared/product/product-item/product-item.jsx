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
import ProductItemDetail from "./product-item-detail";
import ProductItemColor from "./product-item-color";

const ProductItem = ({ 
  title, 
  href, 
  imgSrc, 
  point, 
  offPrice, 
  price, 
  colors, 
  children, 
  $alignRight, 
  paddingUnit }) => {
  return (
    <StyledWrapper paddingUnit={paddingUnit}>
      <StyledContainer >
        <StyledContent>
          <StyledImgWrapper paddingUnit={paddingUnit}>
            <StyledLink to={href}>
              <StyledImg src={imgSrc} />
            </StyledLink>
          </StyledImgWrapper>
          <StyledTitle to={href} $alignRight={$alignRight} >{title}</StyledTitle>
        </StyledContent>
        <ProductItemDetail
          price={price}
          offPrice={offPrice}
          href={href}
          point={point}
          $alignRight={$alignRight}
        />
        <StyledColors $alignRight={$alignRight}>
          <ProductItemColor type={1} />
          <ProductItemColor type={2} />
          <ProductItemColor type={3} />
          <ProductItemColor type={4} />
        </StyledColors>
        {children}
      </StyledContainer>
    </StyledWrapper>
  );
};

ProductItem.propTypes = {
  price: PropTypes.number,
  offPrice: PropTypes.number,
  href: PropTypes.string,
  point: PropTypes.number,
  children: PropTypes.node,
  $alignRight: PropTypes.bool,
  paddingUnit:PropTypes.number
};

export default ProductItem;
