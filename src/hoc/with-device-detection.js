import React, { Component } from "react";
import { CheckUserAgent, DeviceTypes } from "../utils/device-detection";


// const withDeviceDetection = WrappedComponent => {
//     return class withDeviceDetection extends Component {
//         constructor(){
//             super();
            
//             console.log(this.props);
//             const {staticContext} = this.props;
//             const userAgent = navigator.userAgent;
//             this.deviceType = CheckUserAgent(userAgent);
//         }



//         render() {
//             return(
//                 <WrappedComponent {...this.props} deviceType={this.deviceType} /> 
//             )
//         }
//     }
// }

const withDeviceDetection = WrappedComponent => (props) => {
    const {staticContext} = props;
    const userAgent = staticContext && staticContext.req ? staticContext.req.headers['user-agent'] : navigator.userAgent;
    const deviceType = CheckUserAgent(userAgent);
    return <WrappedComponent {...props} deviceType={deviceType} />;
};

export default withDeviceDetection;