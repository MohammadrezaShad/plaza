import React from 'react';
import { Helmet } from "react-helmet";
import loadable from '@loadable/component';


import { DeviceTypes } from '../../utils/device-detection';
import withDeviceDetection from '../../hoc/with-device-detection';

const Client = loadable(() => import('../..//components/views/club/history/client'));
const Mobile = loadable(() => import('../../components/views/club/history/mobile'));


const History = ({deviceType}) => (
    <div>
        <Helmet>
            <title>{process.env.REACT_APP_NAME + ' |  پلازا تاریخچه امتیازات'}</title>
        </Helmet>
        {
            deviceType == DeviceTypes.MOBILE
            ?
            <Mobile />
            :
            <Client />
        }
    </div>
)

export default withDeviceDetection(History);