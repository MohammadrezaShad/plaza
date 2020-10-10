import React, { useState } from 'react'
import PropTypes from 'prop-types'

import {
    Wrapper,
    Input,
    Icon
} from './textbox.styled'
import IconProvider from '../../../providers/icon/icon-provider';

const Textbox = ({placeholder, icon , showIcon, buttonCallback,changeHandler,inputValue,reference,...props}) => {
    const [iconIsShow, setIconIsShow] = useState(showIcon || !!icon);

    return (
        <Wrapper>
            {
                iconIsShow ? <Icon as={buttonCallback ? 'button' : 'span'} onClick={buttonCallback}><IconProvider icon={icon} size="16px" /></Icon> : null
            }
            <Input {...props} placeholder={placeholder} hasIcon={iconIsShow} onChange={changeHandler} value={inputValue} ref={reference}/>
        </Wrapper>
    )
}

Textbox.propTypes = {
    placeholder: PropTypes.string,
    icon: PropTypes.string,
    showIcon: PropTypes.bool
}

export default Textbox
