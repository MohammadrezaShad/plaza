import React from "react";
import PropTypes from "prop-types";

import { StyledWrapper } from "./special-offer.styled";
import ProductItem from "../../../../../../shared/product/product-item";
import Paths from "../../../../../../../utils/paths";
import ProdOne from "../../../../../../../assets/images/club/prod1test.png";
import ProdTwo from "../../../../../../../assets/images/club/prod2test.png";
import ProdThree from "../../../../../../../assets/images/club/prod3test.png";
import ProdFour from "../../../../../../../assets/images/club/prod4test.png";

const SpecialOffer = (props) => {
  return (
    <StyledWrapper>

      <ProductItem 
      href={Paths.home.getPath()} 
      imgSrc={ProdOne} 
      title="اسپیکر بلوتوث مشکی رنگ کیفیت عالی دارای امکانات خیلی زیاد" 
      price={3000000} 
      offPrice={2550000} 
      point={102} />

      <ProductItem 
      href={Paths.home.getPath()} 
      imgSrc={ProdTwo} 
      title="دسته بازی پلی استیشن 4 قرمز رنگ" 
      price={3000000} 
      offPrice={2550000} 
      point={102} />

      <ProductItem 
      href={Paths.home.getPath()} 
      imgSrc={ProdThree} 
      title="هدفون مشکی بی سیم به همراه کاپ های قرمز رنگ" 
      price={3000000} 
      offPrice={2550000} 
      point={102} />

      <ProductItem 
      href={Paths.home.getPath()} 
      imgSrc={ProdFour} 
      title="موس گیمینگ زرد رنگ به امکانات حرفه ای برای گیمیر ها" 
      price={3000000} 
      offPrice={2550000} 
      point={102} />
      
    </StyledWrapper>
  );
};

SpecialOffer.propTypes = {};

export default SpecialOffer;
