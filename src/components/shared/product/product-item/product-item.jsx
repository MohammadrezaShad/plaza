import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import {
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
  StyledSpecialLayout,
  StyledHoverIconWrap,
  StyledHoverIcon,
  StyledItemDetail
} from "./product-item.styled";
import ProductItemDetail from "../product-item-detail";
import ProductItemColor from "../product-item-color";
import { ReactComponent as GilErtebatMark } from '../../../../assets/images/gilMark.svg'
import IconProvider from "../../../../providers/icon/icon-provider";

const ProductItem = ({
  title,
  href,
  imgSrc,
  point,
  offPrice,
  price,
  colors = true,
  children,
  $alignRight,
  specialOffer,
  specialSale,
  hover,
  gilMark,
  imgWidth = "67%",
  favorite = true,
  compare = false
}) => {
  const { t } = useTranslation()
  return (
    <Fragment >
      <StyledContainer >
        <StyledContent>
          <StyledImgWrapper imgWidth={imgWidth}>
            <StyledLink to={href}>
              <StyledImg src={imgSrc} />
            </StyledLink>
          </StyledImgWrapper>
          <StyledTitle to={href} $alignRight={$alignRight} >{title}</StyledTitle>
        </StyledContent>
        <StyledItemDetail $alignRight={$alignRight}>
          <ProductItemDetail
            price={price}
            offPrice={offPrice}
            href={href}
            point={point}
            $alignRight={$alignRight}
          />
        </StyledItemDetail>
        {
          colors ?
            <StyledColors $alignRight={$alignRight}>
              <ProductItemColor type={1} />
              <ProductItemColor type={2} />
              <ProductItemColor type={3} />
              <ProductItemColor type={4} />
            </StyledColors> : null
        }

        {
          gilMark ?
            <StyledGilMark>
              <GilErtebatMark />
              <StyledGilMarkText>
                {t("gilMark")}
              </StyledGilMarkText>
            </StyledGilMark> : null
        }
        {
          specialOffer ?
            <StyledSpecialWrap>
              <StyledSpecialLayout $specialOffer={specialOffer} />
              <StyledSpecialIcon $specialOffer={specialOffer} as={IconProvider} icon="special-offer" size="20px" />
              <StyledSpecialText>{t("specialOffer")}</StyledSpecialText>
              <StyledSpecialLayout $specialOffer={specialOffer} />
            </StyledSpecialWrap> : null
        }
        {
          specialSale ?
            <StyledSpecialWrap>
              <StyledSpecialLayout $specialSale={specialSale} />
              <StyledSpecialIcon $specialSale={specialSale} as={IconProvider} icon="special-sale" size="20px" />
              <StyledSpecialText>{t("specialSale")}</StyledSpecialText>
              <StyledSpecialLayout $specialSale={specialSale} />
            </StyledSpecialWrap> : null
        }
        <StyledHoverIconWrap hover={hover} $specialSale={specialSale} $specialOffer={specialOffer}>
          {
            compare ?
              <StyledHoverIcon
                as={IconProvider}
                icon="select-compare"
                size="24px" /> : ''
          }
          {
            favorite ?
              <StyledHoverIcon as={IconProvider} icon="favorite-o" size="24px" /> : ''
          }
        </StyledHoverIconWrap>
        {children}
      </StyledContainer>
    </Fragment>
  );
};

ProductItem.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  imgSrc: PropTypes.string,
  offPrice: PropTypes.number,
  href: PropTypes.string,
  point: PropTypes.number,
  children: PropTypes.node,
  $alignRight: PropTypes.bool,
  specialOffer: PropTypes.bool,
  specialSail: PropTypes.bool,
  colors: PropTypes.bool,
  hover: PropTypes.bool,
  gilMark: PropTypes.bool,
  imgWidth: PropTypes.string,
  favorite: PropTypes.bool,
  compare: PropTypes.bool
};

export default ProductItem;
