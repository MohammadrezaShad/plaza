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
import Card from '../../../../../shared/card'

const FooterDetail = props => {
    const { t } = useTranslation()

    return (
        <Fragment>
            <Enamad>
                <Card>
                    <EnamadLink >
                        <EnamadLogo src={CommercialBusiness} alt={t('nationalAssociationOfVirtualBusinesses')} />
                    </EnamadLink>
                </Card>
                <Card>
                    <EnamadLink >
                        <EnamadLogo src={OnlineBusiness} alt={t('eCommerceDevelopmentCenter')} />
                    </EnamadLink>
                </Card>
                <Card>
                    <EnamadLink  >
                        <EnamadLogo src={Organizing} alt={t('nationalRegistrationMark')} />
                    </EnamadLink >
                </Card>
            </Enamad>
            <Description>
                <DescriptionLink to={Paths.home.getPath()}>
                    <Logo />
                </DescriptionLink>
                <Text>
                    {t('footerDescriptionOne')}
                    <br />
                    {t('footerDescriptionTwo')}
                </Text>
            </Description>
        </Fragment>
    )
}

export default FooterDetail
