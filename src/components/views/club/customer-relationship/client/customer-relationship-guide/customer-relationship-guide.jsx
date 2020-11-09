import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import { Trans, useTranslation } from 'react-i18next'

import { StyledWrapper, StyledContent, StyledContainer } from './customer-relationship-guide.styled'
import BuyGuideCard from '../../../../../shared/guide-card'
import CustomerRelationship from '../../../../../dialogs/club/customer-relationship'
import CustomerRelationshipItem from './customer-relationship-item'

const CustomerRelationshipGuide = () => {
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
            <CustomerRelationship open={showModal} onClose={onClose} />
            <StyledWrapper>
                <StyledContent>
                    <CustomerRelationshipItem total={10} current={2} text={t("plazaClubArea.buyToghethers")} subText={t("plazaClubArea.buyToghetherLegal")} />
                </StyledContent>
                <StyledContent>
                    <CustomerRelationshipItem total={8} current={2} text={t("plazaClubArea.replacement")} subText={t("plazaClubArea.replacementLegal")} />
                </StyledContent>
                <StyledContent>
                    <CustomerRelationshipItem total={18} current={2} text={t("plazaClubArea.introduction")} subText={t("plazaClubArea.introductionLegal")} />
                </StyledContent>
                <StyledContent>
                    <CustomerRelationshipItem total={18} current={2} text={t("plazaClubArea.replaced")} subText={t("plazaClubArea.replacedLegal")} />
                </StyledContent>
            </StyledWrapper>
        </Fragment>
    )
}

CustomerRelationshipGuide.propTypes = {

}

export default CustomerRelationshipGuide
