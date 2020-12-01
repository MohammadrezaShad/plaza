import React, { Fragment } from 'react'
import { useTranslation } from 'react-i18next'

import {
    StyledContent,
    StyledIcon,
    StyledTitle,
    StyledImg,
    StyledImgLink,
    StyledImgWrapper,
    StyledText,
    StyledWrap,
    StyledPrcentage,
    StyledConsent,
    StyledConsentIcon,
    StyledIconWrap
} from './brands-preview.styled'
import ImageTest from '../../../assets/res/client/hovittest.png'
import IconProvider from '../../../providers/icon/icon-provider'
import Paths from '../../../utils/paths'
import StarRating from '../star-rating'

const BrandsPreview = () => {
    const { t } = useTranslation()
    return (
        <Fragment>
            <StyledContent>
                <StyledIcon as={IconProvider} icon="favorite-o" size="24px" />
                <StyledIcon as={IconProvider} icon="share" size="24px" />
            </StyledContent>
            <StyledContent>
                <StyledImgWrapper>
                    <StyledImgLink to={Paths.home.getPath()}>
                        <StyledImg src={ImageTest} alt={t("brands")} />
                    </StyledImgLink>
                </StyledImgWrapper>
            </StyledContent>
            <StyledTitle>برند هویت</StyledTitle>
            <StyledContent>
                <StyledWrap>
                    <StyledConsent>
                        <StyledText>{t('brandsView.userSatisfaction')}</StyledText>
                        <StyledIconWrap>
                            <StyledConsentIcon as={IconProvider} icon="chevron-left" size="8px" />
                        </StyledIconWrap>
                    </StyledConsent>
                    <StarRating rate={4} >
                        <StyledPrcentage>80%</StyledPrcentage>
                    </StarRating>
                </StyledWrap>
                <StyledWrap>
                    <StyledText>{t('brandsView.productCount')}</StyledText>
                    <StyledText>542</StyledText>
                </StyledWrap>
            </StyledContent>
        </Fragment>
    )
}

export default BrandsPreview
