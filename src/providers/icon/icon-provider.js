import React from 'react'
import IcoMoon from 'react-icomoon'
import iconSet from '../../assets/fonts/icon/iconmoon.json';

const IconProvider = ({ ...props }) => {
    return <IcoMoon iconSet={iconSet} {...props} />;
}

export default IconProvider

