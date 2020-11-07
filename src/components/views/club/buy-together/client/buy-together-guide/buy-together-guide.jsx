import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import { Trans, useTranslation } from 'react-i18next'

import { StyledWrapper, StyledContent, StyledContainer } from './buy-together-guide.styled'
import BuyGuideCard from '../../../../../shared/guide-card'
import BuyTogether from '../../../../../dialogs/club/buy-together'
import BuyTogetherItem from './buy-together-item'

const BuyTogetherGuide = () => {
    const { t } = useTranslation()
    const [showModal, setShowModal] = useState(false)

    const onClose = () => {
        setShowModal(false)
    }
    const onOpen = () => {
        setShowModal(true)
    }

    return (
        <Fragment>
            <StyledContainer $display="responsive">
                <BuyGuideCard onOpen={onOpen} title={t("plazaClubArea.guideTitleTwoResponsive")} />
            </StyledContainer>
            <StyledContainer>
                <BuyGuideCard onOpen={onOpen} title={t("plazaClubArea.guideTitleTwo")} />
            </StyledContainer>
            <BuyTogether open={showModal} onClose={onClose} />
            <StyledWrapper>
                <StyledContent>
                    <BuyTogetherItem total={10} current={2} text={t("plazaClubArea.buyToghethers")} subText={t("plazaClubArea.buyToghetherLegal")} />
                </StyledContent>
                <StyledContent>
                    <BuyTogetherItem total={8} current={2} text={t("plazaClubArea.replacement")} subText={t("plazaClubArea.replacementLegal")} />
                </StyledContent>
                <StyledContent>
                    <BuyTogetherItem total={18} current={2} text={t("plazaClubArea.introduction")} subText={t("plazaClubArea.introductionLegal")} />
                </StyledContent>
                <StyledContent>
                    <BuyTogetherItem total={18} current={2} text={t("plazaClubArea.replaced")} subText={t("plazaClubArea.replacedLegal")} />
                </StyledContent>
            </StyledWrapper>
        </Fragment>
    )
}

BuyTogetherGuide.propTypes = {

}

export default BuyTogetherGuide
