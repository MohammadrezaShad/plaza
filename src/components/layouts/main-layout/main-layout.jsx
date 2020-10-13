import React from 'react';
import { renderRoutes } from 'react-router-config';
import loadable from '@loadable/component';

import { DeviceTypes } from '../../../utils/device-detection';
import withDeviceDetection from '../../../hoc/with-device-detection';

const DesktopMainLayout = loadable(() => import('./client'));
const MobileMainLayout = loadable(() => import('./mobile'));

const MainLayout = ({ deviceType, route }) => {
    return (
        (deviceType == DeviceTypes.MOBILE)
        ?
        <MobileMainLayout>
            {renderRoutes(route.routes)}
        </MobileMainLayout>
        :
        <DesktopMainLayout>
            {renderRoutes(route.routes)}
        </DesktopMainLayout>
    )
}

export default withDeviceDetection(MainLayout);