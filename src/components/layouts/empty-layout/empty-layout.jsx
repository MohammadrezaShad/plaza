import React from 'react';
import loadable from '@loadable/component';

import { DeviceTypes } from '../../../utils/device-detection';
import withDeviceDetection from '../../../hoc/withDeviceDetection';

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

export default withDeviceDetection(EmptyLayout);