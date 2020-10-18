import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

import {
    StyledWrapper
} from './unauthorized.styled'
import Paths from '../../../utils/paths'

const Unauthorized = props => {
    return (
        <StyledWrapper>
            <p>شما اجازه دسترسی به این بخش رو ندارید</p>
            <div><Link to={Paths.signin.getPath()}>ورود</Link></div>
        </StyledWrapper>
    )
}

Unauthorized.propTypes = {

}

export default Unauthorized
