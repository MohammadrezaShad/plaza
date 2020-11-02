import React from 'react';
import { Helmet } from "react-helmet";
import loadable from '@loadable/component';

import withDeviceDetection from '../../hoc/with-device-detection';
import { DeviceTypes } from '../../utils/device-detection';

// const Client = loadable(() => import('../components/views/home/client'));
// const Mobile = loadable(() => import('../components/views/home/mobile'));


const Order = ({deviceType}) => (
    <div>
        <Helmet>
            <title>{process.env.REACT_APP_NAME + ' | ثبت سفارش'}</title>
        </Helmet>

        <h1>ثبت سفارش</h1>
    </div>
)

export default withDeviceDetection(Order);