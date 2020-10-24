import React from "react";
import PropTypes from "prop-types";

import { StyledWrapper, StyledFill } from "./progress-bar-layout.styled";

const ProgressBarLayout = ({ progressPrecentage }) => {
  return (
    <StyledWrapper>
      <StyledFill progressPrecentage={progressPrecentage} />
    </StyledWrapper>
  );
};

ProgressBarLayout.propTypes = {};

export default ProgressBarLayout;
