import React ,{Fragment} from 'react';
import { Helmet } from "react-helmet";
import loadable from '@loadable/component';


import { DeviceTypes } from '../../utils/device-detection';
import withDeviceDetection from '../../hoc/with-device-detection';

const Client = loadable(() => import('../../components/views/club/customer-relationship/client'));
const Mobile = loadable(() => import('../../components/views/club/customer-relationship/mobile'));


const CustomerRelationship = ({deviceType}) => (
    <Fragment>
        <Helmet>
            <title>{process.env.REACT_APP_NAME + ' |  پلازا مشاهده هم خریدها'}</title>
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

export default withDeviceDetection(CustomerRelationship);