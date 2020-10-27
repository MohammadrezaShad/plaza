import React from 'react'
import PropTypes from 'prop-types'

import {
    StyledWrapper
} from './form-group.styled'

const FormGroup = ({children, marginTopUnit}) => {
    return (
        <StyledWrapper marginTopUnit={marginTopUnit}>
            {children}
        </StyledWrapper>
    )
}

FormGroup.propTypes = {
    children: PropTypes.node,
    marginTopUnit: PropTypes.number
}

export default FormGroup
