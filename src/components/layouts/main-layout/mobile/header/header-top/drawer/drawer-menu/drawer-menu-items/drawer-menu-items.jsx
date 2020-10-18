import React from "react";
import PropTypes from "prop-types";

import { 
    StyledWrapper,
    StyledLayout
} from "./drawer-menu-items.styled";

import DrawerMenuHeader from "./drawer-menu-header";
import DrawerMenuProducts from "./drawer-menu-products";
import DrawerMenuLinks from "./drawer-menu-links";


const DrawerMenuItems = ({showDrawer}) => {
  return (
     <StyledLayout showDrawer={showDrawer}>
     <StyledWrapper>
         <DrawerMenuHeader />
         <DrawerMenuProducts/>
         <DrawerMenuLinks/>
     </StyledWrapper>
     </StyledLayout>
  )
};

DrawerMenuItems.propTypes = {
    showDrawer:PropTypes.bool
};

export default DrawerMenuItems;
