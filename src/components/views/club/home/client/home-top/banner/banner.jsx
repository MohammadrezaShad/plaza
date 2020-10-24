import React from "react";
import PropTypes from "prop-types";

import { 
    StyledWrapper, 
    StyledContainer, 
    StyledImg 
} from "./banner.styled";
import BannerImg from "../../../../../../../assets/images/club/banner.png";

const Banner = ({}) => {
  return (
    <StyledWrapper>
        <StyledContainer>
        <StyledImg src={BannerImg} alt="" />
        </StyledContainer>
    </StyledWrapper>
  );
};

Banner.propTypes = {};

export default Banner;
