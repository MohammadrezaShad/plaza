import React from 'react'
import PropTypes from 'prop-types'

import { StyledWrapper,StyledLayout,StyledImg,StyledContent } from './404-view.styled'
import NotFoundImg from '../../../../assets/images/404.png'
const NotFoundView = () => {
    return (
        <StyledWrapper>
            <StyledLayout>
                <StyledContent>
                  <StyledImg src={NotFoundImg} />
                </StyledContent>
            </StyledLayout>
        </StyledWrapper>
    )
}

NotFoundView.propTypes = {

}

export default NotFoundView
