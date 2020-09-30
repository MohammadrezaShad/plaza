import React from 'react'
import IcoMoon from 'react-icomoon'
import iconSet from '../../assets/fonts/icon/iconmoon.json';

import PropTypes from 'prop-types'

const IconProvider = ({ ...props }) => {
    return <IcoMoon iconSet={iconSet} {...props} />;
}

IconProvider.propTypes = {
    icon: PropTypes.string.isRequired,
    size: PropTypes.string
}

export default IconProvider



