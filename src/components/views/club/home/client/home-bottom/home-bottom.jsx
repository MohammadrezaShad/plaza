import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

import {StyledWrapper,StyledTitle } from './home-bottom.styled'
import SpecialOffer from './special-offer'

const HomeBottom = ({}) => {
    const {t}=useTranslation()
    return (
        <StyledWrapper>
            <StyledTitle>{t('topRatedProduct')}</StyledTitle>
            <SpecialOffer />
        </StyledWrapper>
    )
}

HomeBottom.propTypes = {

}

export default HomeBottom
