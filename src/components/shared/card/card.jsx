import React from 'react'
import PropTypes from 'prop-types'

import {StyledWrapper} from './card.styled'

const Card = ({children}) => {
    return (
        <StyledWrapper>
            {children}
        </StyledWrapper>
    )
}

Card.propTypes = {
    children:PropTypes.node
}

export default Card
