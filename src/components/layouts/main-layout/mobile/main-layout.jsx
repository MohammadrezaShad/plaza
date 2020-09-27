import React from 'react';
import { useTranslation } from 'react-i18next';

const MainLayout = ({children}) => {
    const { t } = useTranslation();
    return (
        <div>
            <h1>mobile {t('title')}</h1>
            {children}
        </div>
    )
}

export default MainLayout;