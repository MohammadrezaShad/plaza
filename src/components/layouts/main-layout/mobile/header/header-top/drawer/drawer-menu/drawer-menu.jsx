import React from "react";
import PropTypes from 'prop-types'

import { 
    StyledWrapper,
    StyledBackDrop
} from "./drawer-menu.styled";
import DrawerMenuItems from "./drawer-menu-items";

const DrawerMenu = ({showDrawer,toggleDrawer}) => {

  return (
  <StyledWrapper showDrawer={showDrawer}>
    <StyledBackDrop showDrawer={showDrawer} onClick={toggleDrawer}/>
    <DrawerMenuItems showDrawer={showDrawer}/>
  </StyledWrapper>
  )
};

DrawerMenu.propTypes = {
showDrawer:PropTypes.bool,
toggleDrawer:PropTypes.func
}

export default DrawerMenu;
