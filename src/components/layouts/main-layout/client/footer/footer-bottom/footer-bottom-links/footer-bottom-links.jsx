import React, { Fragment } from 'react'
import { useTranslation } from 'react-i18next'

import {
    Store,
    StoreLink,
    StoreImage,
    SocialMedia,
    SocialMediaLink
} from './footer-bottom-links.styled'
import {ReactComponent as Instagram} from '../../../../../../../assets/images/instagram.svg'
import {ReactComponent as Twitter} from '../../../../../../../assets/images/twitter.svg'
import {ReactComponent as Facebook} from '../../../../../../../assets/images/facebook.svg'
import {ReactComponent as Telegram} from '../../../../../../../assets/images/telegram.svg'
import {ReactComponent as Aparat} from '../../../../../../../assets/images/aparat.svg'
import GoogleImg from '../../../../../../../assets/images/google.png'
import BazarImg from '../../../../../../../assets/images/bazar.png'
import AppleImg from '../../../../../../../assets/images/apple.png'

const FooterBottomLinks = () => {
    const { t } = useTranslation()


    return (
        <Fragment>
            <Store>
                <StoreLink>
                    <StoreImage src={BazarImg} alt={t('googleAlt')} />
                </StoreLink>
                <StoreLink>
                    <StoreImage src={GoogleImg} alt={t('bazarAlt')} />
                </StoreLink>
                <StoreLink>
                    <StoreImage src={AppleImg} alt={t('appleAlt')} />
                </StoreLink>
            </Store>
            <SocialMedia>
                <SocialMediaLink>
                    <Instagram />
                </SocialMediaLink>
                <SocialMediaLink>
                    <Twitter />
                </SocialMediaLink>
                <SocialMediaLink>
                    <Facebook />
                </SocialMediaLink>
                <SocialMediaLink>
                    <Telegram />
                </SocialMediaLink>
                <SocialMediaLink>
                    <Aparat />
                </SocialMediaLink>
            </SocialMedia>
        </Fragment>
    )
}

export default FooterBottomLinks
