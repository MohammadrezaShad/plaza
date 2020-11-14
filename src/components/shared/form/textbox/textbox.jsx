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
    showIcon = true,
    type,
    error,
    success,
    buttonCallback,
    onChange,
    reference,
    ...props
}) => {
    const [iconIsShow, setIconIsShow] = useState(showIcon || !!icon);
    const [inputIcon, setInputIcon] = useState('eye-open')
    const [inputType, setInputType] = useState(type || 'text')
    const toggleType = () => {
        if (inputType === 'password') {
            setInputType('text')
            setInputIcon('close')
        } else {
            setInputType('password')
            setInputIcon('eye-open')
        }
    }
    const renderIcon = () => {
        if (type === "password") {
            return (
                <Icon text={inputIcon} onClick={toggleType}>
                    <IconProvider icon={inputIcon} size="16px" />
                </Icon>
            )
        } else if (iconIsShow) {
            return (
                <Icon as={buttonCallback ? 'button' : 'span'} onClick={buttonCallback} buttonCallback={buttonCallback}>
                    {icon ? <IconProvider icon={icon} size="16px" /> : null}
                </Icon>
            )
        }
    }
    return (
        <Wrapper>
            {
                renderIcon()
            }
            <Input
                {...props}
                error={error}
                success={success}
                type={inputType}
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
    autocomplete: PropTypes.string,
    type: PropTypes.string,
    error: PropTypes.bool,
    success: PropTypes.bool,
}

export default Textbox
