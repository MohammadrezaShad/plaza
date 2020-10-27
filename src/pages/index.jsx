import React, { Fragment } from 'react';
import { Helmet } from "react-helmet";
import loadable from '@loadable/component';


import withDeviceDetection from '../hoc/with-device-detection';
import { DeviceTypes } from '../utils/device-detection';
import Paths from '../utils/paths';

const Client = loadable(() => import('../components/views/home/client'));
const Mobile = loadable(() => import('../components/views/home/mobile'));


const Home = ({deviceType}) => (
    <Fragment>
        <Helmet>
            <title>{process.env.REACT_APP_NAME + ' | صفحه ی اصلی'}</title>
            <link rel="canonical" href={Paths.home.getAbsoulteUri()} />
        </Helmet>
        {
            deviceType == DeviceTypes.MOBILE
            ?
            <Mobile />
            :
            <Client />
        }
    </Fragment>
)

export default withDeviceDetection(Home);