import React from 'react'
import PropTypes from 'prop-types'

import {StyledWrapper} from './home-top.styled'
import GuideCard from './guide-card'
import Banner from './banner'
import ProfileCard from '../../../../../layouts/club-layout/client/profile-card'

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
