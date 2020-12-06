import React from 'react'
import PropTypes from 'prop-types'

import { StyledWrapper, StyledLayout, StyledRadio, StyledText } from './radio-button.styled'

const RadioButton = ({ text, onChange, name, defaultChecked }) => {
    return (
        <StyledWrapper>
            {
                text
                    ?
                    <StyledText>{text}</StyledText>
                    :
                    null
            }
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
    onChange: PropTypes.func,
    defaultChecked: PropTypes.bool,
    text: PropTypes.string
}

export default RadioButton
