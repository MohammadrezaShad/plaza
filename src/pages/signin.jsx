import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import loadable from '@loadable/component'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import withDeviceDetection from '../hoc/with-device-detection'
import { DeviceTypes } from '../utils/device-detection'
import EmptyLayout from '../components/layouts/empty-layout'
import Paths from '../utils/paths'
const Desktop = loadable(() => import('../components/views/signin/client'))
const Mobile = loadable(() => import('../components/views/signin/mobile'))

const Signin = ({deviceType, route, staticContext}) => {
    const history = useHistory()
    const loggedIn = useSelector(state => state.user.loggedIn)

    if(loggedIn && staticContext){
        staticContext.url = Paths.home.getPath();
    }

    useEffect(() => {
        if (loggedIn){
            history.push(Paths.home.getPath())
        }
    }, [loggedIn]);

    return (
        <EmptyLayout deviceType={deviceType}>
            <Helmet>
                <title>{process.env.REACT_APP_NAME + ' | ورود'}</title>
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
}
export default withDeviceDetection(Signin);