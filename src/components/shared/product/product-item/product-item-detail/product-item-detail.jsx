import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

import { 
    StyledWrapper, 
    StyledDetail, 
    StyledContent, 
    StyledLink, 
    StyledPoint, 
    StyledPrice, 
    StyledOffPrice, 
    StyledCurrency 
} from './product-item-detail.styled'
import Button from '../../../button/button'
import { buttonSizes } from '../../../../../constants/button-configs'

const ProductItemDetail = ({ price, offPrice, href, point }) => {
    const { t } = useTranslation()

    return (
        <StyledWrapper>
            <StyledDetail>
                <StyledPoint>{t('plazaClubArea.yourScore')}:{point}</StyledPoint>
                <StyledLink to={href}>
                    <Button text={t('details')} size={buttonSizes.MEDIUM} textWrap={false} />
                </StyledLink>
            </StyledDetail>
            <StyledContent>
                <StyledPrice>{price.toLocaleString()}</StyledPrice>
                <StyledOffPrice>{offPrice.toLocaleString()}</StyledOffPrice>
                <StyledCurrency>{t('currency')}</StyledCurrency>
            </StyledContent>
        </StyledWrapper>
    )
}

ProductItemDetail.propTypes = {
    price: PropTypes.number,
    offPrice: PropTypes.number,
    href: PropTypes.string,
    point: PropTypes.number
}

export default ProductItemDetail
