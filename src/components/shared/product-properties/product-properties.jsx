import React from "react";
import PropTypes from "prop-types";

import {
  StyledWrapper,
  StyledHead,
  StyledTitle,
  StyledContent,
  StyledBlock,
  StyledContainer,
  StyledText,
  StyledSubText,
  StyledIcon,
  StyledDetail,
  StyledAltText,
  StyledHighlightText,
  StyledButtonWrap,
  StyledButtonText,
  StyledDetailText
} from "./product-properties.styled";
import IconProvider from "../../../providers/icon/icon-provider";
import Button from "../button";
import {
  buttonColors,
  buttonVariants,
} from "../../../constants/button-configs";

const ProductProperties = (props) => {
  return (
    <StyledWrapper>
      <StyledHead>
        <StyledTitle>ویژگی های محصول</StyledTitle>
      </StyledHead>
      <StyledContent>
        <StyledBlock>
          <StyledText>دریافت  <StyledHighlightText>2،060</StyledHighlightText> امتیاز با خرید این کالا</StyledText>
        </StyledBlock>
        <StyledBlock>
          <StyledContainer>
            <StyledDetailText>ابعاد</StyledDetailText>
            <StyledSubText>‏63.5 میلی مترx170 x 188 </StyledSubText>
          </StyledContainer>
          <StyledContainer>
            <StyledDetailText>نوع اتصال</StyledDetailText>
            <StyledSubText>بی سیم</StyledSubText>
          </StyledContainer>
          <StyledContainer>
            <StyledDetailText>قابلیت شوک</StyledDetailText>
            <StyledIcon as={IconProvider} icon="true" size="24px" $color={1} />
          </StyledContainer>
          <StyledContainer>
            <StyledDetailText>وزن</StyledDetailText>
            <StyledSubText>‏300 گرم</StyledSubText>
          </StyledContainer>
          <StyledContainer>
            <StyledDetailText>سازگار با</StyledDetailText>
            <StyledSubText>کامپیوتر ، لپ تاپ ، PS4</StyledSubText>
          </StyledContainer>
        </StyledBlock>
        <StyledBlock>
          <StyledIcon as={IconProvider} icon="shopping-cart" size="32px" $color={2} />
          <StyledDetail>
            <StyledText>دیگر فروشندگان این کالا</StyledText>
            <StyledAltText>
              <StyledHighlightText>10</StyledHighlightText>
              فروشنده در پلازا این کالا را می‌فروشند
            </StyledAltText>
          </StyledDetail>
          <StyledIcon as={IconProvider} icon="arrow-left" size="16px" />
        </StyledBlock>
        <StyledBlock>
          <StyledButtonWrap>
            <Button
              text="لوازم جانبی این کالا"
              color={buttonColors.SECONDARY}
            />
          </StyledButtonWrap>
          <StyledButtonWrap>
            <Button variant={buttonVariants.OUTLINE}>
              <StyledIcon as={IconProvider} icon="arrow-right" size="16px" />
              <StyledButtonText>قبلی</StyledButtonText>
            </Button>
          </StyledButtonWrap>
        </StyledBlock>
      </StyledContent>
    </StyledWrapper>
  );
};

ProductProperties.propTypes = {};

export default ProductProperties;
