import React from "react";
import PropTypes from "prop-types";

import { StyledWrapper,StyledItem,StyledLink } from "./footer-navigation.styled";
import Paths from "../../../../../../../utils/paths";

const FooterNavigation = ({ items }) => {

  return (
    <StyledWrapper>
      {items.map((item, index) => {
       return (
       <StyledItem key={index}>
         <StyledLink to={Paths.home.getPath()}>
         {item}
         </StyledLink>
        </StyledItem>)
      })}
    </StyledWrapper>
  );
};

FooterNavigation.propTypes = {
  items: PropTypes.array,
};

export default FooterNavigation;
