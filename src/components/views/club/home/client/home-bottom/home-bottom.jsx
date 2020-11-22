import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

import { StyledWrapper, StyledContainer } from './home-bottom.styled'
import SpecialOffer from './special-offer'
import Card from '../../../../../shared/card'

const HomeBottom = ({ }) => {
    const { t } = useTranslation()
    return (
        <StyledContainer>
            <Card>
                <StyledWrapper>
                    <SpecialOffer />
                </StyledWrapper>
            </Card>
        </StyledContainer>
    )
}

HomeBottom.propTypes = {

}

export default HomeBottom
