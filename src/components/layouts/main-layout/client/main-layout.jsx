import React from 'react';
import { useTranslation } from 'react-i18next';
import Footer from './footer';
import Header from './header';
import { 
    Wrapper,
    Container
} from './main-layout.styled';

const MainLayout = ({children}) => {
    const { t } = useTranslation();
    return (
        <Wrapper>
            <Header />
            <Container>
                {children}
            </Container>
            <Footer />
        </Wrapper>
    )
}

export default MainLayout;