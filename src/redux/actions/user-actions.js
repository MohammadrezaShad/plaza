import {
    Cookies
} from 'react-cookie';

import cookiesName from '../../constants/cookies-name';
import userService from '../../services/user-service'
import userTypes from '../types/user-types'
import decodeUserToken from '../../helpers/decode-user-token';

const cookies = new Cookies();

export const logout = () => {
    cookies.remove(cookiesName.USER);

    return {
        type: userTypes.LOGOUT
    }
}

export const login = (username, password, rememberMe) => {
    return dispatch => {
        // userService.login(username, password, rememberMe)
        //     .then(response => {
        //         if (response.data && response.data.token) {
        //const token = response.data.token;
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiaWF0IjoxNTE2MjM5MDIyLCJnaXZlbl9uYW1lIjoi2LPbjNin2YXaqSIsImZhbWlseV9uYW1lIjoi2K3YqNuM2KjbjCDZvtmI2LEiLCJ3aG9sZVNhbGluZ05hbWUiOiLYqtqp2YbZiNqv24zZhCDYtNmF2KfZhCIsIndob2xlU2FsaW5nU3RhdGUiOjIsImxldmVsIjoxLCJwb2ludCI6MTIwMH0.SF18sczKkfnvrjTNq2E6iHKO4TgiVORCU6RkfYQqnhs'
        const cookieConfig = {}
        if (rememberMe) {
            let date = new Date();
            cookieConfig.expires = new Date(date.setMonth(date.getMonth() + 1))
        }
        cookies.set(cookiesName.USER, token, cookieConfig)
        dispatch({
            type: userTypes.LOGIN_SUCCESS,
            token: token,
            user: decodeUserToken(token)
        });
        //     }
        // });
    }
}