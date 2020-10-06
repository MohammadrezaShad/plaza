import React from 'react'
import { useTranslation } from 'react-i18next'

import {
    Copyright,
    Text
} from './footer-bottom-copyright.styled'

const FooterBottomCopyright = () => {
    const { t } = useTranslation()

    return (
        <Copyright>
            <Text>{t('perisianCopyright')}</Text>
            <Text>{t('englishCopyright')}</Text>
        </Copyright>
    )
}

export default FooterBottomCopyright
