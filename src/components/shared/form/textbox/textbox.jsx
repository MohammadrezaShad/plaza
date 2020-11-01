import React, { useState } from 'react'
import PropTypes from 'prop-types'

import {
    Wrapper,
    Input,
    Icon
} from './textbox.styled'
import IconProvider from '../../../../providers/icon/icon-provider';

const Textbox = ({
    autocomplete,
    placeholder,
    icon, 
    showIcon, 
    buttonCallback, 
    onChange,
    inputValue,
    reference,
    ...props
}) => {
    const [iconIsShow, setIconIsShow] = useState(showIcon || !!icon);

    return (
        <Wrapper>
            {
                iconIsShow ? <Icon as={buttonCallback ? 'button' : 'span'} onClick={buttonCallback}><IconProvider icon={icon} size="16px" /></Icon> : null
            }
            <Input 
                {...props} 
                spellCheck={false} 
                placeholder={placeholder} 
                hasIcon={iconIsShow} 
                onChange={onChange} 
                ref={reference} 
                autoComplete={autocomplete}
                />
        </Wrapper>
    )
}

Textbox.propTypes = {
    placeholder: PropTypes.string,
    icon: PropTypes.string,
    showIcon: PropTypes.bool,
    onChange: PropTypes.func,
    autocomplete: PropTypes.string
}

export default Textbox
