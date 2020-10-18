import React from "react";
import PropTypes from "prop-types";

import { 
    StyledItem, 
    StyledSpot, 
    StyledLink 
} from "./drawer-menu-links-item.styled";

const DrawerMenuLinksItem = ({ link, text, type }) => {
  return (
    <StyledItem>
      <StyledSpot type={type}></StyledSpot>
      <StyledLink to={{ link }}>{text}</StyledLink>
    </StyledItem>
  );
};

DrawerMenuLinksItem.propTypes = {
  link: PropTypes.string,
  type: PropTypes.string,
};

export default DrawerMenuLinksItem;
