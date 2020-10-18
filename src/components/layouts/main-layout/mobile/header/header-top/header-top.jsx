import React, { useEffect, useState } from "react";

import { StyledWrapper, StyledContent, StyledLink } from "./header-top.styled";
import Drawer from "./drawer";
import { ReactComponent as Logo } from "../../../../../../assets/images/mobileLogo.svg";
import Paths from "../../../../../../utils/paths";
import ActionBar from "./action-bar";

const HeaderTop = () => {
  return (
    <StyledWrapper>
      <StyledContent>
        <Drawer />
        <StyledLink to={Paths.home.getPath()}>
          <Logo />
        </StyledLink>
      </StyledContent>
      <StyledContent>
        <ActionBar />
      </StyledContent>
    </StyledWrapper>
  );
};

export default HeaderTop;
