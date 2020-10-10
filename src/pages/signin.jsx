import React from 'react';
import { Helmet } from "react-helmet";
import loadable from '@loadable/component';
import EmptyLayout from '../components/layouts/empty-layout';


import withDeviceDetection from '../hoc/withDeviceDetection';
import { DeviceTypes } from '../utils/device-detection';

const Client = loadable(() => import('../components/views/signin/client'));
const Mobile = loadable(() => import('../components/views/signin/mobile'));

const Signin = ({deviceType}) => (
    <EmptyLayout>
        <Helmet>
            <title>{process.env.REACT_APP_NAME + ' | ورود'}</title>
        </Helmet>
        {
            deviceType == DeviceTypes.MOBILE
            ?
            <Mobile />
            :
            <Client />
        }
    </EmptyLayout>
)

export default withDeviceDetection(Signin);