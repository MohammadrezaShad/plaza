import React, { useState } from 'react'
import PropTypes from 'prop-types'
import HeaderMenu from '../header-menu'

const WholesalingMenu = () => {
    const [warningIsShow, setWarningIsShow] = useState(true)

    return (
        <HeaderMenu icon="wholesaling" showWarning={warningIsShow}>
            
        </HeaderMenu>
    )
}

WholesalingMenu.propTypes = {

}

export default WholesalingMenu
