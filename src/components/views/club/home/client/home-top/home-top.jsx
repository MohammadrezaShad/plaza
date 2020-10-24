import React from 'react'
import PropTypes from 'prop-types'

import {StyledWrapper} from './home-top.styled'
import ProfileCard from './profile-card'
import GuideCard from './guide-card'
import Banner from './banner'

const HomeTop = ({}) => {
    return (
        <StyledWrapper>
            <ProfileCard/>
            <Banner/>
            <GuideCard/>
        </StyledWrapper>
    )
}

HomeTop.propTypes = {

}

export default HomeTop
