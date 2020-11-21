import React from 'react'
import PropTypes from 'prop-types'

import {
    StyledWrapper,
    StyledCheckBox,
    StyledLayout,
    StyledText,
    StyledButtonWrap
} from './switch-button.styled'

const SwitchButton = ({ onChange, name,text }) => {
    return (
        <StyledWrapper>
            <StyledCheckBox name={name} type="checkbox" onChange={onChange}/>
            <StyledButtonWrap>
                <StyledLayout  />
            </StyledButtonWrap>
            {
                text
                ?
                <StyledText>{text}</StyledText>
                :
                null
            }
        </StyledWrapper>
    )
}

SwitchButton.propTypes = {
    onChange: PropTypes.func,
    text:PropTypes.string,
    name:PropTypes.string,
}

export default SwitchButton
