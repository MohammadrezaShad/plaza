import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

import {
    StyledWrapper,
    StyledContent,
    StyledPrice,
    StyledOffPrice,
    StyledCurrency
} from './product-item-detail.styled'

const ProductItemDetail = ({ price, offPrice }) => {
    const { t } = useTranslation()

    return (
        <StyledWrapper>
            <StyledContent>
                <StyledPrice >{price.toLocaleString()}</StyledPrice>
                <StyledOffPrice>{offPrice.toLocaleString()}</StyledOffPrice>
                <StyledCurrency>{t('currency')}</StyledCurrency>
            </StyledContent>
        </StyledWrapper>
    )
}

ProductItemDetail.propTypes = {
    price: PropTypes.number,
    offPrice: PropTypes.number,
}

export default ProductItemDetail
