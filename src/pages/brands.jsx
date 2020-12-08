import React, { Fragment, useContext } from 'react';
import { Helmet } from "react-helmet";
import loadable from '@loadable/component';


import withDeviceDetection from '../hoc/with-device-detection';
// import { DeviceTypes } from '../utils/device-detection';
// import LoadingContext from '../context/loading-context';
// import useLoad from '../helpers/use-load';

// const Client = loadable(() => import('../components/views/brands/client'));
// const Mobile = loadable(() => import('../components/views/brands/mobile'));


const Home = ({ deviceType }) => {
    // const { loadedAction, resetLoaded, loaded } = useContext(LoadingContext)
    // const loadHook = useLoad([Client, Mobile], loadedAction, resetLoaded, loaded)
    return (
        <Fragment>
            BrandsPage
        </Fragment>
    )
}

export default withDeviceDetection(Home);