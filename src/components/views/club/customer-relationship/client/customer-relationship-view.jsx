import React, { Fragment } from "react";
import CustomerRelationshipGuide from "./customer-relationship-guide";
import CustomerRelationshipTable from "./customer-relationship-table";

import { StyledWrapper, StyledContent } from './customer-relationship-view.styled'

const CustomerRelationshipView = () => {
    return (
        <StyledWrapper>
            <CustomerRelationshipTable />
            <StyledContent>
               <CustomerRelationshipGuide />
            </StyledContent>
        </StyledWrapper>
    );
};

export default CustomerRelationshipView;