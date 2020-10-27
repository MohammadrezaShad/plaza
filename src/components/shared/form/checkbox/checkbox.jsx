import React, { createRef } from 'react'
import PropTypes from 'prop-types'

import {
    StyledWrapper,
    StyledInput,
    StyledCheckbox,
    StyledCheckboxIcon,
    StyledText
} from './checkbox.styled'
import IconProvider from '../../../../providers/icon/icon-provider'

const Checkbox = ({text, name, children, onChange}) => {
    return (
        <StyledWrapper>
            <StyledInput name={name} type="checkbox" onChange={onChange} />
            <StyledCheckbox>
                <StyledCheckboxIcon as={IconProvider} icon="tick" size="13px" />
            </StyledCheckbox>
            {
                text
                ?
                <StyledText>{text}</StyledText>
                :
                null
            }
            {children}
        </StyledWrapper>
    )
}

Checkbox.propTypes = {
    text: PropTypes.string,
    name: PropTypes.string,
    children: PropTypes.node,
    onChange: PropTypes.func
}

export default Checkbox
