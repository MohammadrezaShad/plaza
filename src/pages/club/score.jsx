import React from 'react';
import { Helmet } from "react-helmet";
import loadable from '@loadable/component';


import withDeviceDetection from '../../hoc/with-device-detection';
import { DeviceTypes } from '../../utils/device-detection';

const Client = loadable(() => import('../../components/views/club/score/client'));
//const Mobile = loadable(() => import('../../components/views/club/score/mobile'));


const Score = ({deviceType}) => (
    <div>
        <Helmet>
            <title>{process.env.REACT_APP_NAME + ' |  پلازا کلاب | نمودار امتیازات'}</title>
        </Helmet>
        {
            deviceType == DeviceTypes.MOBILE
            ?
            <Client />
            :
            <Client />
        }
    </div>
)

export default withDeviceDetection(Score);