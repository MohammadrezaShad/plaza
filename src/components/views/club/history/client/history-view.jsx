import React from "react";

import { StyledWrapper, StyledLayout,StyledContainer } from "./history-view.styled";
import HistoryTable from "./history-table";

const HistoryView = () => {
    return (
        <StyledWrapper>
            <StyledLayout>
                <StyledContainer>
                <HistoryTable/>
                </StyledContainer>
            </StyledLayout>
        </StyledWrapper>
    );
};

export default HistoryView;
