import React from "react";
import PropTypes from "prop-types";

import { StyledWrapper, StyledPoint } from "./progress-bar.styled";
import ProgressBarLayout from "./progress-bar-layout";

const ProgressBar = ({ minPoint, maxPoint, point }) => {
  const progressPrecentage = (minPoint, maxPoint, point) => {
    return `${(point / (maxPoint - minPoint)) * 100}%`;
  };

  return (
    <StyledWrapper>
      <StyledPoint>{maxPoint.toLocaleString()}</StyledPoint>
      <StyledPoint>{minPoint}</StyledPoint>
      <ProgressBarLayout progressPrecentage={progressPrecentage(minPoint, maxPoint, point)} />
    </StyledWrapper>
  );
};

ProgressBar.propTypes = {
  minPoint: PropTypes.number,
  maxPoint: PropTypes.number,
  point: PropTypes.number,
};

export default ProgressBar;
