import React from 'react'
import PropTypes from 'prop-types'

import {
    StyledWrapper,
    StyledCheckBox,
    StyledLayout
} from './switch-button.styled'

const SwitchButton = ({ onChange, name }) => {
    return (
        <StyledWrapper>
            <StyledCheckBox name={name} type="checkbox" onChange={onChange} />
            <StyledLayout />
        </StyledWrapper>
    )
}

SwitchButton.propTypes = {
    onChange: PropTypes.func
}

export default SwitchButton
