import React from 'react'
import PropTypes from 'prop-types'

import { StyledWrapper, StyledIcon, StyledTextWrap, StyledText } from './order-progress.styled'
import IconProvider from '../../../../providers/icon/icon-provider'

const OrderProgressItem = props => {
    return (
        <StyledWrapper>
            <StyledIcon>
                <IconProvider icon="shopping-cart" size="23px" />
            </StyledIcon>
            <StyledTextWrap>
                <StyledText>سبد</StyledText>
                <StyledText>خرید</StyledText>
            </StyledTextWrap>
        </StyledWrapper>
    )
}

OrderProgressItem.propTypes = {

}

export default OrderProgressItem
