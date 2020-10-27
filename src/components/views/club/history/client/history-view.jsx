import React from "react";

import { StyledWrapper, StyledLayout,StyledContainer } from "./history-view.styled";
import ProfileCard from "../../../../shared/profile-card";
import HistoryTable from "./history-table";

const HistoryView = () => {
    return (
        <StyledWrapper>
            <StyledLayout>
                <StyledContainer>
                <ProfileCard alignSelf='flex-start'/>
                <HistoryTable/>
                </StyledContainer>
            </StyledLayout>
        </StyledWrapper>
    );
};

export default HistoryView;
