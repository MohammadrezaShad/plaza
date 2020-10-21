import React from 'react';
import { renderRoutes } from 'react-router-config';
import loadable from '@loadable/component';

import { DeviceTypes } from '../../../utils/device-detection';
import withDeviceDetection from '../../../hoc/with-device-detection';

const DesktopClubLayout = loadable(() => import('./client'));
const MobileClubLayout = loadable(() => import('./mobile'));

const ClubLayout = ({ deviceType, route }) => {
    return (
        (deviceType == DeviceTypes.MOBILE)
        ?
        <MobileClubLayout>
            {renderRoutes(route.routes)}
        </MobileClubLayout>
        :
        <DesktopClubLayout>
            {renderRoutes(route.routes)}
        </DesktopClubLayout>
    )
}

export default withDeviceDetection(ClubLayout);