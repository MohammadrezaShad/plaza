import React, { Fragment } from "react";
import PropTypes from "prop-types";

import FooterCopyright from "./footer-copyright";
import FooterSocialMedia from "./footer-socialmedia";

const FooterBottom = ({}) => {
  return (
  <Fragment>
    <FooterSocialMedia/>
    <FooterCopyright/>
  </Fragment>
  );
};

FooterBottom.propTypes = {};

export default FooterBottom;
