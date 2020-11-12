import React, { Fragment, useContext, useEffect } from 'react';
import { Helmet } from "react-helmet";
import loadable from '@loadable/component';


import withDeviceDetection from '../../hoc/with-device-detection';
import { DeviceTypes } from '../../utils/device-detection';
import LoadingContext from '../../context/loading-context';
import useLoad from '../../helpers/use-load';

const Client = loadable(() => import('../../components/views/club/score/client'));
//const Mobile = loadable(() => import('../../components/views/club/score/mobile'));


const Score = ({ deviceType }) => {

    const { loadedAction, loaded, resetLoaded } = useContext(LoadingContext)
    const loadHook = useLoad([Client], loadedAction, resetLoaded, loaded)


    return (
        <Fragment>
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
        </Fragment>
    )
}

export default withDeviceDetection(Score);