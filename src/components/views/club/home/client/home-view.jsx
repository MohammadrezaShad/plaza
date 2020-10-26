import React from "react";

import { StyledWrapper,StyledLayout } from "./home-view.styled";
import HomeTop from "./home-top";
import HomeBottom from "./home-bottom";

const HomeView = () => {
  return (
    <StyledWrapper>
      <StyledLayout>
      <HomeTop/>
      <HomeBottom/>
      </StyledLayout>
    </StyledWrapper>
  );
};

export default HomeView;
