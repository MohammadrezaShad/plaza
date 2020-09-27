import React from 'react';
import { useTranslation } from 'react-i18next';
import { 
    Wrapper
} from './main-layout.styled';

const MainLayout = ({children}) => {
    const { t } = useTranslation();
    return (
        <Wrapper>
            <h1>desktop {t('title')}</h1>
            {children}
        </Wrapper>
    )
}

export default MainLayout;