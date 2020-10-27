import React from 'react';
import Footer from './footer';
import Header from './header';
import { 
    StyledWrapper,
    StyledContainer
} from './main-layout.styled';

const MainLayout = ({children}) => {
    return (
        <StyledWrapper>
            <Header />
            <StyledContainer>
                {children}
            </StyledContainer>
            <Footer />
        </StyledWrapper>
    )
}

export default MainLayout;