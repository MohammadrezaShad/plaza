import React, { useState } from 'react'
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
import SearchBox from './search-box'
import NavBar from './nav-bar'


const Header = () => {
    const [navIsShow, setNavIsShow] = useState(true);

    return (
        <Wrapper showNav={navIsShow}>
            <Layout>
                <TopSection>
                    <LogoLink to="/"><Logo /></LogoLink>
                    <Container>
                        <SearchBox />
                    </Container>
                    <ActionBar/>
                </TopSection>
            </Layout>
            <NavBar onNavShow={setNavIsShow} />
        </Wrapper>
    )
}

Header.propTypes = {

}

export default Header
