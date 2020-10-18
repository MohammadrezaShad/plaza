import React, { useEffect , useContext } from "react";

import { StyledWrapper, StyledContainer, StyledLayout } from "./drawer.styled";
import { disableBodyScroll, enableBodyScroll } from "../../../../../../../utils/body-scroll";
import DrawerMenu from "./drawer-menu";
import DrawerContext from "../../../../../../../context/drawer-context";
import ProfileContext from "../../../../../../../context/profile-context";

const Drawer = () => {

  const {showDrawer,toggleDrawer}=useContext(DrawerContext)
  const {showProfile,toggleProfile}=useContext(ProfileContext)

  const toggleDrawerAction=()=>{
    if(showProfile) toggleProfile()
    toggleDrawer()
  }

  useEffect(() => {
    if (showDrawer) {
      disableBodyScroll();
    } else {
      enableBodyScroll();
    }
    return () => {
      if (showDrawer) {
        enableBodyScroll();
      }
    };
  }, [showDrawer]);

  return (
    <StyledWrapper>
      <StyledContainer onClick={toggleDrawerAction}>
        <StyledLayout />
      </StyledContainer>
      <DrawerMenu showDrawer={showDrawer} toggleDrawer={()=>toggleDrawer()} />
    </StyledWrapper>
  );
};



export default Drawer;
