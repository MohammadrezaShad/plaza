import React from 'react'
import PropTypes from 'prop-types'

import {ReactComponent as Logo} from '../../../../../assets/images/logo.svg'
import ActionBar from './action-bar'

import {
    Wrapper,
    Layout,
    Container,
    LogoLink,
    TopSection
} from './header.styled'


const Header = () => {
    return (
        <Wrapper>
            <Layout>
                <TopSection>
                    <LogoLink to="/"><Logo /></LogoLink>
                    <Container></Container>
                    <ActionBar/>
                </TopSection>
            </Layout>

        </Wrapper>
    )
}

Header.propTypes = {

}

export default Header
