import React from "react";
import PropTypes from "prop-types";

import { 
    StyledWrapper, 
    StyledText, 
    StyledIcon 
} from "./search-header.styled";
import IconProvider from "../../../../../../../../../../providers/icon/icon-provider";

const SearchHeader = ({ toggleSearch }) => {
  return (
    <StyledWrapper>
      <StyledText>جستجو</StyledText>
      <StyledIcon onClick={toggleSearch} as={IconProvider} icon="close" size="16px" />
    </StyledWrapper>
  );
};

SearchHeader.propTypes = {
  toggleSearch: PropTypes.func,
};

export default SearchHeader;
