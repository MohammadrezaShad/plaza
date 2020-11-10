import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

import { StyledWrapper, StyledTitle, StyledContainer } from './home-bottom.styled'
import SpecialOffer from './special-offer'
import Panel from '../../../../../shared/panel'

const HomeBottom = ({ }) => {
    const { t } = useTranslation()
    return (
        <StyledContainer>
            <Panel>
                <StyledWrapper>
                    <StyledTitle>{t('topRatedProduct')}</StyledTitle>
                    <SpecialOffer />
                </StyledWrapper>
            </Panel>
        </StyledContainer>
    )
}

HomeBottom.propTypes = {

}

export default HomeBottom
