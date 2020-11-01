import React, { Fragment } from "react";

import { StyledWrapper,StyledLayout } from "./home-view.styled";
import HomeTop from "./home-top";
import HomeBottom from "./home-bottom";

const HomeView = () => {
  return (
    <Fragment>
      <HomeTop/>
      <HomeBottom/>
    </Fragment>
  );
};

export default HomeView;
