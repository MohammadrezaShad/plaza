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
  StyledColors,
  StyledGilMark,
  StyledGilMarkText,
  StyledSpecialWrap,
  StyledSpecialIcon,
  StyledSpecialText,
  StyledSpecialLayout

} from "./product-item.styled";
import ProductItemDetail from "./product-item-detail";
import ProductItemColor from "./product-item-color";
import { ReactComponent as GilErtebatMark } from '../../../../assets/images/gilMark.svg'
import IconProvider from "../../../../providers/icon/icon-provider";

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
  paddingUnit,
  $border,
  specialOffer,
  specialSale,
  hoverable,
  gilMark,
  imgPaddingUnit,
  brand,
}) => {
  return (
    <StyledWrapper brand={brand} $border={$border} paddingUnit={paddingUnit}>
      <StyledContainer >
        <StyledContent>
          <StyledImgWrapper imgPaddingUnit={imgPaddingUnit}>
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
        {
          gilMark ?
            <StyledGilMark>
              <GilErtebatMark />
              <StyledGilMarkText>
                تکنوگیل شمال
            </StyledGilMarkText>
            </StyledGilMark> : null
        }
        {
          specialOffer ?
            <StyledSpecialWrap>
              <StyledSpecialLayout $specialOffer={specialOffer} />
              <StyledSpecialIcon $specialOffer={specialOffer} as={IconProvider} icon="special-offer" size="20px" />
              <StyledSpecialText>پیشنهاد ویژه</StyledSpecialText>
              <StyledSpecialLayout $specialOffer={specialOffer} />
            </StyledSpecialWrap> : null
        }
        {
          specialSale ?
            <StyledSpecialWrap>
              <StyledSpecialLayout $specialSale={specialSale} />
              <StyledSpecialIcon $specialSale={specialSale} as={IconProvider} icon="special-sale" size="20px" />
              <StyledSpecialText>فروش ویژه</StyledSpecialText>
              <StyledSpecialLayout $specialSale={specialSale} />
            </StyledSpecialWrap> : null
        }
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
  paddingUnit: PropTypes.number,
  $border: PropTypes.bool,
  specialOffer: PropTypes.bool,
  specialSail: PropTypes.bool
};

export default ProductItem;
