import React, { Fragment } from "react";
import BuyTogetherGuide from "./buy-together-guide";
import BuyTogetherTable from "./buy-together-table";

import { StyledWrapper, StyledContent } from './buy-together-view.styled'

const BuyTogetherView = () => {
    return (
        <StyledWrapper>
            <BuyTogetherTable />
            <StyledContent>
               <BuyTogetherGuide />
            </StyledContent>
        </StyledWrapper>
    );
};

export default BuyTogetherView;