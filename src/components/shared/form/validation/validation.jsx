import React from 'react'
import PropTypes from 'prop-types'

import {
    StyledWrapper
} from './validation.styled'

const Validation = ({show = false, message, children}) => {
    return (
        <StyledWrapper show={show}>
           {message}
           {children}
        </StyledWrapper>
    )
}

Validation.propTypes = {
    show: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired,
    children: PropTypes.node
}

export default Validation
