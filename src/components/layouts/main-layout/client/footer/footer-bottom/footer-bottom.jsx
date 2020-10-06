import React,{ Fragment }  from 'react'

import FooterBottomCopyright from './footer-bottom-copyright'
import FooterBottomLinks from './footer-bottom-links'

const FooterBottom = () => {
    return (
        <Fragment>
            <FooterBottomLinks />
            <FooterBottomCopyright />
        </Fragment>
    )
}

export default FooterBottom
