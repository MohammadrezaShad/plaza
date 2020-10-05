import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import {
    StyledWrapper,
    StyledSeparator,
    StyledLayout
} from './nav-bar.styled'
import NavItem from './nav-item'
import Paths from '../../../../../../utils/paths'

const NavBar = ({onNavShow}) => {
    const [list, setList] = useState([{}]);
    const [navIsShow, setNavIsShow] = useState(true);

    let lastScroll = 0


    const scrollHandler = () => {
        const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        const cleintHeight = document.body.clientHeight || document.documentElement.clientHeight;

        if (scrollTop < cleintHeight / 2 || lastScroll > scrollTop) {
            setNavIsShow(true);
            onNavShow && onNavShow(true);
            
        } else {
            setNavIsShow(false);
            onNavShow && onNavShow(false);
        }
        lastScroll = scrollTop;
    }

    useEffect(() => {
        scrollHandler();
        window.addEventListener('scroll', scrollHandler);
        return () => {
            window.removeEventListener('scroll', scrollHandler);
        }
    }, [])

    return (
        <StyledWrapper show={navIsShow}>
            <StyledLayout>
                <NavItem title="محصولات" list={list} />
                <StyledSeparator/>
                <NavItem title="پلازا پلاس" to={Paths.plazaPlus.getPathAndQuery()} />
                <NavItem title="باشگاه مشتریان" to={Paths.club.home.getPathAndQuery()} />
                <NavItem title="پلازا مگ" href={Paths.plazaMag.getAbsoulteUri()} />
                <NavItem title="سوالات متداول" to={Paths.faq.getPathAndQuery()} />
                <NavItem title="برندها" to={Paths.brand.home.getPathAndQuery()} />
            </StyledLayout>
        </StyledWrapper>
    )
}

NavBar.propTypes = {

}

export default NavBar
