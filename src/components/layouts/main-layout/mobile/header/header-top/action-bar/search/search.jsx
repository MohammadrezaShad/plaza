import React, { Fragment, useEffect, useContext, useState } from "react";

import { StyledIcon } from "./search.styled";
import IconProvider from "../../../../../../../../providers/icon/icon-provider";
import SearchMenu from "./search-menu";
import { disableBodyScroll, enableBodyScroll } from "../../../../../../../../utils/body-scroll";
import ProfileContext from "../../../../../../../../context/profile-context";

const Search = () => {
  const [showSearch, setShowSearch] = useState(false);
  const { showProfile, toggleProfile } = useContext(ProfileContext);

  const toggleSearch = () => {
    if (showProfile) toggleProfile();
    setShowSearch(!showSearch);
  };

  useEffect(() => {
    if (showSearch) {
      disableBodyScroll();
    } else {
      enableBodyScroll();
    }
    return () => {
      if (showSearch) {
        enableBodyScroll();
      }
    };
  }, [showSearch]);

  return (
    <Fragment>
      <StyledIcon as={IconProvider} icon="search" size="20px" onClick={toggleSearch} />
      <SearchMenu showSearch={showSearch} toggleSearch={toggleSearch} />
    </Fragment>
  );
};

export default Search;
