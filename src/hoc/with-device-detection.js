import React from "react";
import { CheckUserAgent } from "../utils/device-detection";

const withDeviceDetection = WrappedComponent => props => {
    const {staticContext} = props;
    const userAgent = staticContext && staticContext.req ? staticContext.req.headers['user-agent'] : navigator.userAgent;
    const deviceType = CheckUserAgent(userAgent);
    return <WrappedComponent {...props} deviceType={deviceType} />;
};

export default withDeviceDetection;