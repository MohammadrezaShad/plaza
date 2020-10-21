import React from "react";
import PropTypes from "prop-types";

import { Wrapper, Container } from "./club-layout.styled";
import Header from "./header";

const ClubLayout = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <Container>{children}</Container>
    </Wrapper>
  );
};

ClubLayout.propTypes = {
  children: PropTypes.node,
};

export default ClubLayout;
