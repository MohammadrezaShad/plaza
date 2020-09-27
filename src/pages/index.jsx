import React from 'react';
import { Helmet } from "react-helmet";
import loadable from '@loadable/component';

import withDeviceDetection from '../hoc/withDeviceDetection';
import { DeviceTypes } from '../utils/device-detection';

const Client = loadable(() => import('../components/views/home/client'));
const Mobile = loadable(() => import('../components/views/home/mobile'));


const Home = ({deviceType}) => (
    <div>
        <Helmet>
            <title>{process.env.REACT_APP_NAME + ' | صفحه ی اصلی'}</title>
        </Helmet>
        {
            deviceType == DeviceTypes.MOBILE
            ?
            <Mobile />
            :
            <Client />
        }
        <div>test</div>
    </div>
)

export default withDeviceDetection(Home);