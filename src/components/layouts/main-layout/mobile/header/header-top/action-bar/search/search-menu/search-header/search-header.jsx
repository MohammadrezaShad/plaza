import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import { 
    StyledWrapper, 
    StyledText, 
    StyledIcon 
} from "./search-header.styled";
import IconProvider from "../../../../../../../../../../providers/icon/icon-provider";

const SearchHeader = ({ toggleSearch }) => {
  const {t}=useTranslation()
  return (
    <StyledWrapper>
      <StyledText>{t('search')}</StyledText>
      <StyledIcon onClick={toggleSearch} as={IconProvider} icon="close" size="16px" />
    </StyledWrapper>
  );
};

SearchHeader.propTypes = {
  toggleSearch: PropTypes.func,
};

export default SearchHeader;
