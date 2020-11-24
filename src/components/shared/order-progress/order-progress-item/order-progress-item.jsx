import React from 'react'
import PropTypes from 'prop-types'

import { StyledWrapper, StyledIcon, StyledTextWrap, StyledText } from './order-progress.styled'
import IconProvider from '../../../../providers/icon/icon-provider'

const OrderProgressItem = (
    { icons, 
      textOne, 
      textTwo, 
      level, 
      index }
    ) => {
    console.log(icons)
    return (
        <StyledWrapper>
            <StyledIcon level={level} index={index} >
                <IconProvider icon={icons} size="23px" />
            </StyledIcon>
            <StyledTextWrap>
                <StyledText>{textOne}</StyledText>
                <StyledText>{textTwo}</StyledText>
            </StyledTextWrap>
        </StyledWrapper>
    )
}

OrderProgressItem.propTypes = {

}

export default OrderProgressItem
