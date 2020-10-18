import React from "react";

import { StyledWrapper } from "./header.styled";
import HeaderTop from "./header-top";
import Wholesaling from "./wholesaling";
import ProfileProvider from "../../../../../providers/profile/profile-provider";
import DrawerProvider from "../../../../../providers/drawer/drawer-provider";

const Header = () => {
  return (
    <StyledWrapper>
      <ProfileProvider>
        <DrawerProvider>
          <HeaderTop />
        </DrawerProvider>
      </ProfileProvider>
      <Wholesaling />
    </StyledWrapper>
  );
};

export default Header;
