import React, { useEffect, useRef } from "react";
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

const ProductItem = ({ itemWidth,itemWidthHandler,title, href, imgSrc, point, offPrice, price, colors, children }) => {
  const node=useRef()
  useEffect(() => {
    if((!itemWidth ||  itemWidth!==node.current.clientWidth)&& itemWidthHandler){
      itemWidthHandler(node.current.clientWidth)
    }
  })
  return (
    <StyledWrapper ref={node}>
      <StyledContainer >
        <StyledContent>
          <StyledImgWrapper >
            <StyledLink to={href}>
              <StyledImg src={imgSrc} />
            </StyledLink>
          </StyledImgWrapper>
          <StyledTitle to={href}>{title}</StyledTitle>
        </StyledContent>
        <ProductItemDetail
          price={price}
          offPrice={offPrice}
          href={href}
          point={point}
        />
        <StyledColors>
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
  children: PropTypes.node
};

export default ProductItem;
