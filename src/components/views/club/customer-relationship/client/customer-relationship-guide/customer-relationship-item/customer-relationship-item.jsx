import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { 
    StyledWrapper, 
    StyledContent, 
    StyledText, 
    StyledSubText, 
    StyledCurrent, 
    StyledTotal 
} from './customer-relationship-item.styled'

const CustomerRelationshipItem = ({ total, current, text, subText }) => {
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

CustomerRelationshipItem.propTypes = {

}

export default CustomerRelationshipItem
