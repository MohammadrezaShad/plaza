import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

import { StyledWrapper, StyledLayout, StyledImg, StyledContent, StyledText, StyledHint, StyledLink } from './404-view.styled'
import NotFoundImg from '../../../../assets/images/404.png'
import Paths from '../../../../utils/paths'
import Button from '../../../shared/button'
import { buttonVariants } from '../../../../constants/button-configs'

const NotFoundView = () => {
    const { t } = useTranslation()
    return (
        <StyledWrapper>
            <StyledLayout>
                <StyledContent>
                    <StyledImg src={NotFoundImg} />
                </StyledContent>
                <StyledText>{t("notFound")}</StyledText>
                <StyledHint>{t("notFoundHint")}</StyledHint>
                <StyledLink to={Paths.home.getPath()}>
                    <Button text={t("return")} variant={buttonVariants.OUTLINE} />
                </StyledLink>
            </StyledLayout>
        </StyledWrapper>
    )
}

NotFoundView.propTypes = {

}

export default NotFoundView
