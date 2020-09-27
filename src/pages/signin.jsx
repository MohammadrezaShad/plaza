import React from 'react';
import { Helmet } from "react-helmet";

const Signin = () => (
    <div>
        <Helmet>
            <title>{process.env.REACT_APP_NAME + ' | ورو;د'}</title>
        </Helmet>
        <h1>ورود</h1>
    </div>
)

export default Signin;