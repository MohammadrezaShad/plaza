import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import { 
    StyledWrapper,
} from "./drawer-menu-links.styled";
import DrawerMenuLinksItem from "./drawer-menu-links-item";
import Paths from "../../../../../../../../../../utils/paths";

const DrawerMenuLinks = () => {
  const {t}=useTranslation()

  return (
     <StyledWrapper>
       <DrawerMenuLinksItem type="plazaPlus" text={t('plazaPlus')} link={Paths.home.getPath()}/>
       <DrawerMenuLinksItem type="plazaMag" text={t('plazaMag')} link={Paths.home.getPath()}/>
       <DrawerMenuLinksItem type="question" text={t('frequentlyAskedQuestions')} link={Paths.home.getPath()}/>
       <DrawerMenuLinksItem type="brands" text={t('brands')} link={Paths.home.getPath()}/>
     </StyledWrapper>
  )
};

DrawerMenuLinks.propTypes = {
  
};

export default DrawerMenuLinks;
