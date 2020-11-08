import React from 'react';
import { Helmet } from "react-helmet";
import loadable from '@loadable/component';


import withDeviceDetection from '../hoc/with-device-detection';
import EmptyLayout from '../components/layouts/empty-layout';
import { DeviceTypes } from '../utils/device-detection';

 const Desktop = loadable(() => import('../components/views/signup/client'));
 const Mobile = loadable(() => import('../components/views/signup/mobile'));


const Signup = ({ deviceType }) => (
    <EmptyLayout deviceType={deviceType}>
        <Helmet>
            <title>{process.env.REACT_APP_NAME + ' | ثبت نام'}</title>
        </Helmet>
         {
            deviceType == DeviceTypes.MOBILE
            ?
            <Mobile />
            :
            <Desktop />
        } 
    </EmptyLayout>
)

export default withDeviceDetection(Signup);