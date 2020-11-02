import React from 'react'
import PropTypes from 'prop-types'

import { StyledWrapper,StyledLayout } from './404-view.styled'

const NotFoundView = props => {
    return (
        <StyledWrapper>
            <StyledLayout>
             404
            </StyledLayout>
        </StyledWrapper>
    )
}

NotFoundView.propTypes = {

}

export default NotFoundView
