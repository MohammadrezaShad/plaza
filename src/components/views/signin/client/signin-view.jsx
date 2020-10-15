import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'

import { login } from '../../../../redux/actions/user-actions'
import Textbox from '../../../shared/textbox'

import {
    StyledWrapper
} from './signin-view.styled'

const SigninView = () => {
    const dispatch = useDispatch()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(username, password, true))
    }

    return (
        <StyledWrapper>
            <form onSubmit={submitHandler}>
                <Textbox onChange={(e) => { setUsername(e.target.value) }} name="username" autocomplete="off" />
                <br />
                <Textbox onChange={(e) => { setPassword(e.target.value) }} name="password" type="password"/>
                <br />
                <input type="checkbox" />
                <br />
                <button type="submit">ورود</button>
            </form>
        </StyledWrapper>
    )
}

SigninView.propTypes = {

}

export default  SigninView
