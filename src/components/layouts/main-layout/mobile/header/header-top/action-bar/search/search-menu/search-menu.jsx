import React from "react";
import PropTypes from "prop-types";

import { StyledWrapper, StyledLayout, StlyedContent } from "./search-menu.styled";
import SearchHeader from "./search-header";
import SearchBox from "../../../../../../../../shared/search-box";

const SearchMenu = ({showSearch,toggleSearch}) => {
  return (
    <StyledWrapper showSearch={showSearch}>
      <StyledLayout showSearch={showSearch}>
        <SearchHeader toggleSearch={toggleSearch} />
        <StlyedContent>
          <SearchBox mobile/>
        </StlyedContent>
      </StyledLayout>
    </StyledWrapper>
  );
};

SearchMenu.propTypes = {
  showSearch:PropTypes.bool,
  toggleSearch:PropTypes.func
};

export default SearchMenu;
