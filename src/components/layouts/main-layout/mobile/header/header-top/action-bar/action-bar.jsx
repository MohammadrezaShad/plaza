import React, { Fragment } from "react";
import {Link} from 'react-router-dom'
 
import { 
  StyledContent, 
  StyledIcon } 
  from "./action-bar.styled";
import IconProvider from "../../../../../../../providers/icon/icon-provider";
import Paths from "../../../../../../../utils/paths";
import Search from "./search";
import Profile from "./profile";

const ActionBar = () => {
  return (
    <Fragment>
      <StyledContent>
        <Search />
      </StyledContent>
      <StyledContent as={Link} to={Paths.home.getPath()} >
        <StyledIcon as={IconProvider} icon="cart-o" size="20px" />
      </StyledContent>
      <StyledContent>
        <Profile />
      </StyledContent>
    </Fragment>
  );
};

export default ActionBar;
