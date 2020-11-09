import React from 'react'
import PropTypes from 'prop-types'

import { StyledWrapper, StyledLayout, StyledRadio } from './radio-button.styled'

const RadioButton = ({ onChange, name, defaultChecked }) => {
    return (
        <StyledWrapper>
            <StyledRadio 
            type="radio" 
            defaultChecked={defaultChecked} 
            name={name} 
            onChange={onChange} />
            <StyledLayout />
        </StyledWrapper>
    )
}

RadioButton.propTypes = {
    name: PropTypes.string,
    onChange: PropTypes.func
}

export default RadioButton
