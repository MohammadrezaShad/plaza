import React from "react";
import PropTypes from "prop-types";

import { Wrapper, Container } from "./club-layout.styled";

const ClubLayout = ({ children }) => {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
};

ClubLayout.propTypes = {
  children: PropTypes.node,
};

export default ClubLayout;
