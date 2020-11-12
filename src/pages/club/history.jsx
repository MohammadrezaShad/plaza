import React, { Fragment, useContext, useEffect } from 'react';
import { Helmet } from "react-helmet";
import loadable from '@loadable/component';


import { DeviceTypes } from '../../utils/device-detection';
import withDeviceDetection from '../../hoc/with-device-detection';
import LoadingContext from '../../context/loading-context';
import useLoad from '../../helpers/use-load';

const Client = loadable(() => import('../../components/views/club/history/client'));
const Mobile = loadable(() => import('../../components/views/club/history/mobile'));


const History = ({ deviceType }) => {
    const { loadedAction, resetLoaded, loaded } = useContext(LoadingContext)
    const loadHook = useLoad([Client, Mobile], loadedAction, resetLoaded, loaded)


    return (
        <Fragment >
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
        </Fragment >
    )

}

export default withDeviceDetection(History);