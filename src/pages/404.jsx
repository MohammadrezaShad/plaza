import React, { Fragment, useContext } from 'react';
import { Helmet } from "react-helmet";
import loadable from '@loadable/component';
import { Redirect } from 'react-router-dom';
import { useLocation } from 'react-router-dom'

import withDeviceDetection from '../hoc/with-device-detection';
import { DeviceTypes } from '../utils/device-detection';
import Paths from '../utils/paths';
import LoadingContext from '../context/loading-context';
import useLoad from '../helpers/use-load';

const Client = loadable(() => import('../components/views/404/client'));
const Mobile = loadable(() => import('../components/views/404/mobile'));


const NotFound = ({ deviceType, staticContext = {} }) => {
    staticContext.notFound = true
    const location = useLocation();
    if (staticContext.notFound && location.pathname !== Paths.notFound.getPath()) {
        return <Redirect to={Paths.notFound.getPath()} />;
    }
    const { loadedAction, resetLoaded, loaded } = useContext(LoadingContext)
    const loadHook = useLoad([Client, Mobile], loadedAction, resetLoaded, loaded)
    return (
        <Fragment>
            <Helmet>
                <title>{process.env.REACT_APP_NAME + ' | 404 '}</title>
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
}

export default withDeviceDetection(NotFound);