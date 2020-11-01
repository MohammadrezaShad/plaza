import React from 'react'
import PropTypes from 'prop-types'

import {StyledWrapper} from './home-top.styled'
import GuideCard from './guide-card'
import Banner from './banner'

const HomeTop = ({}) => {
    return (
        <StyledWrapper>
            <Banner/>
            <GuideCard/>
        </StyledWrapper>
    )
}

HomeTop.propTypes = {

}

export default HomeTop
