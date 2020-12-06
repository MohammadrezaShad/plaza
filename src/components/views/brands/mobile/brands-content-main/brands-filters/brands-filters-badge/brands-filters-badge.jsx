import React from 'react'
import PropTypes from 'prop-types'

import { StyledWrapper, StyledText, StyledIcon } from './brands-filter-badge.styled'
import IconProvider from '../../../../../../../providers/icon/icon-provider'

const BrandsFiltersBadge = ({ text, onClick, id }) => {
    return (
        <StyledWrapper>
            <StyledText>{text}</StyledText>
            <StyledIcon onClick={() => onClick && onClick(id, text)}>
                <IconProvider icon="close" size="8px" />
            </StyledIcon>
        </StyledWrapper>
    )

}

BrandsFiltersBadge.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
    id: PropTypes.number
}

export default BrandsFiltersBadge
