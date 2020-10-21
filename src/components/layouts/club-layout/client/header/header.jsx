import React from "react";
import PropTypes from "prop-types";

import { 
  StyledWrapper, 
  StyledLayout, 
  StyledLogo, 
  StyledTitle 
} from "./header.styled";
import IconProvider from "../../../../../providers/icon/icon-provider";
import { useTranslation } from "react-i18next";
import HeaderList from "./header-list";

const header = ({}) => {
  const {t}=useTranslation()
  
  return (
    <StyledWrapper>
      <StyledLayout>
        <StyledLogo as={IconProvider} icon='club' size="35px" />
        <StyledTitle>{t('club')}</StyledTitle>
        <HeaderList />
      </StyledLayout>
    </StyledWrapper>
  );
};

header.propTypes = {};

export default header;
