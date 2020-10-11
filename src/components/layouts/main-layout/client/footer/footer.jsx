import React from 'react'
import { useTranslation } from 'react-i18next'
import Paths from '../../../../../utils/paths'

import {
    Wrapper,
    Layout,
    Content,
    NavigationContent,
    Button,
    BottomContent
} from './footer.styled'
import FooterNavigation from './footer-navigation'
import FooterDetail from './footer-detail'
import FooterBottom from './footer-bottom'


const Footer = () => {
    const { t } = useTranslation()

    return (
        <Wrapper>
            <Layout>
                <Content>
                    <Button to={Paths.contact.getPath()} >{t('contact')}</Button>
                    <Button to={Paths.about.getPath()} >{t('about')}</Button>
                </Content>
                <NavigationContent>
                    <FooterNavigation title={t('purchaseGuide')} items={[t('frequentlyAskedQuestions'), t('buyMethodAndOrder'), t('paymentMethods'), t('termsOfUsePlazaCoupon'), t('privacy')]} arrow={true} />
                    <FooterNavigation title={t('cooperation')} items={[t('plazaClub'), t('termsOfDelivery'), t('guarantee'), t('trackOrders')]} arrow={true} />
                    <FooterNavigation title={t('customer')} items={[t('plazaSellersPanel'), t('cooperationWithOrganizations'), t('jobOpportunities')]} arrow={true} />
                    <FooterNavigation title={t('support')} items={[t('phoneNumber'), t('email'), t('address')]} arrow={false} dir='ltr' />
                </NavigationContent>
                <Content>
                    <FooterDetail/>
                </Content>
                <BottomContent>
                    <FooterBottom/>
                </BottomContent>
            </Layout>
        </Wrapper>
    )
}

export default Footer


