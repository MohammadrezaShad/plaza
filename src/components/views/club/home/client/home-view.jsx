import React from "react";

import { StyledWrapper,StyledLayout } from "./home-view.styled";
import HomeTop from "./home-top";

const HomeView = () => {
  return (
    <StyledWrapper>
      <StyledLayout>
      <HomeTop/>
      </StyledLayout>
    </StyledWrapper>
  );
};

export default HomeView;
