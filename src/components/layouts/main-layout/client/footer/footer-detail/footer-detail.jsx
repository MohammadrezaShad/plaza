import React, { Fragment } from 'react'
import { useTranslation } from 'react-i18next'

import {
    Enamad,
    EnamadLink,
    EnamadLogo,
    Description,
    DescriptionLink,
    Logo,
    Text
} from './footer-detail.styled'
import Paths from '../../../../../../utils/paths'
import CommercialBusiness from '../../../../../../assets/images/CommercialBusiness.png'
import OnlineBusiness from '../../../../../../assets/images/OnlineBusiness.png'
import Organizing from '../../../../../../assets/images/Organizing.png'

const FooterDetail = props => {
    const { t } = useTranslation()

    return (
        <Fragment>
            <Enamad>
                <EnamadLink >
                    <EnamadLogo src={CommercialBusiness} alt={t('nationalAssociationOfVirtualBusinesses')}/>
                </EnamadLink>
                <EnamadLink >
                    <EnamadLogo src={OnlineBusiness} alt={t('eCommerceDevelopmentCenter')}/>
                </EnamadLink>
                <EnamadLink  >
                    <EnamadLogo src={Organizing} alt={t('nationalRegistrationMark')}/>
                </EnamadLink >
            </Enamad>
            <Description>
                <DescriptionLink to={Paths.home.getPath()}>
                    <Logo />
                </DescriptionLink>
                <Text>
                {t('footerDescriptionOne')}
                <br/>
                {t('footerDescriptionTwo')}
                </Text>
            </Description>
        </Fragment>
    )
}

export default FooterDetail
