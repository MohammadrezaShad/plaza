import React, { Fragment } from 'react';
import { Helmet } from "react-helmet";
import loadable from '@loadable/component';
import { Redirect } from 'react-router-dom';
import { useLocation } from 'react-router-dom'

import withDeviceDetection from '../hoc/with-device-detection';
import { DeviceTypes } from '../utils/device-detection';
import Paths from '../utils/paths';

const Client = loadable(() => import('../components/views/404/client'));
const Mobile = loadable(() => import('../components/views/404/mobile'));


const NotFound = ({ deviceType, staticContext = {} }) => {
    staticContext.notFound = true
    const location = useLocation();
    if(staticContext.notFound && location.pathname !==Paths.notFound.getPath()){
        return <Redirect to={Paths.notFound.getPath()} />;
    }
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