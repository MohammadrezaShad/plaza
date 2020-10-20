import React from "react";
import PropTypes from "prop-types";

import { StyledWrapper,StyledContent } from "./footer.styled";
import FooterTop from "./footer-top";
import FooterBottom from "./footer-bottom";
import FooterEnamad from "./footer-enamad";
import FooterDetail from "./footer-detail";

const Footer = ({}) => {
  return (
    <StyledWrapper>
      <StyledContent>
        <FooterTop />
      </StyledContent>
      <StyledContent>
        <FooterEnamad />
      </StyledContent>
      <StyledContent>
        <FooterDetail />
      </StyledContent>
      <StyledContent>
        <FooterBottom />
      </StyledContent>
    </StyledWrapper>
  );
};

Footer.propTypes = {};

export default Footer;
