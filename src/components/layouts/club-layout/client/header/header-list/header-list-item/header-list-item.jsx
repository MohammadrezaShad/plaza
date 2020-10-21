import React from "react";
import PropTypes from "prop-types";

import { 
    StyledWrapper, 
    StyledLink 
} from "./header-list-item.styled";

const HeaderListItem = ({ text, href }) => {
  return (
    <StyledWrapper>
      <StyledLink to={href}>{text}</StyledLink>
    </StyledWrapper>
  );
};

HeaderListItem.propTypes = {
  text: PropTypes.string,
  href: PropTypes.string,
};

export default HeaderListItem;
