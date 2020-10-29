import React from "react";

import { StyledWrapper, StyledLayout,StyledContainer } from "./history-view.styled";
import HistoryTable from "./history-table";
import ProfileCard from "../../../../layouts/club-layout/client/profile-card";

const HistoryView = () => {
    return (
        <StyledWrapper>
            <StyledLayout>
                <StyledContainer>
                <ProfileCard />
                <HistoryTable/>
                </StyledContainer>
            </StyledLayout>
        </StyledWrapper>
    );
};

export default HistoryView;
