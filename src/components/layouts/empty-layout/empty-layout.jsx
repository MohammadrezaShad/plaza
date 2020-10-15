import React from 'react';
import PropTypes from 'prop-types'
import loadable from '@loadable/component';

import { DeviceTypes } from '../../../utils/device-detection';

const DesktopEmptyLayout = loadable(() => import('./client'));
const MobileEmptyLayout = loadable(() => import('./mobile'));

const EmptyLayout = ({ deviceType, children }) => {
    return (
        (deviceType == DeviceTypes.MOBILE)
        ?
        <MobileEmptyLayout>
            {children}
        </MobileEmptyLayout>
        :
        <DesktopEmptyLayout>
            {children}
        </DesktopEmptyLayout>
    )
}

EmptyLayout.propTypes = {
    deviceType: PropTypes.number.isRequired
}

export default EmptyLayout;