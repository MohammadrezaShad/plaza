import React, { Fragment, useContext } from 'react';
import { Helmet } from "react-helmet";
import loadable from '@loadable/component';

import withDeviceDetection from '../../hoc/with-device-detection';
import { DeviceTypes } from '../../utils/device-detection';
import LoadingContext from '../../context/loading-context';
import useLoad from '../../helpers/use-load';

const Client = loadable(() => import('../../components/views/brand/detail/client'));
const Mobile = loadable(() => import('../../components/views/brand/detail/mobile'));


const BrandDetail = ({ deviceType }) => {
    const { loadedAction, resetLoaded, loaded } = useContext(LoadingContext)
    const loadHook = useLoad([Client, Mobile], loadedAction, resetLoaded, loaded)
    return (
        <Fragment>
            <Helmet>
                <title>{process.env.REACT_APP_NAME + ' | صفحه ی برندها'}</title>
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
export default withDeviceDetection(BrandDetail);