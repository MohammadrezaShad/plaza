import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { StyledWrapper, StyledContent, StyledText, StyledSubText, StyledCurrent, StyledTotal } from './buy-together-item.styled'

const BuyTogetherItem = ({ total, current, text, subText }) => {
    return (
        <Fragment>
            <StyledContent>
                <StyledTotal> {total} /</StyledTotal>
                <StyledCurrent>{current}</StyledCurrent>
            </StyledContent>
            <StyledWrapper>
                <StyledText>{text}</StyledText>
                <StyledSubText>{subText}</StyledSubText>
            </StyledWrapper>
        </Fragment>
    )
}

BuyTogetherItem.propTypes = {

}

export default BuyTogetherItem
