import { Cookies } from 'react-cookie';
import jwtDecode from 'jwt-decode';

import cookiesName from '../../constants/cookies-name';
import userService from '../../services/user-service'
import userTypes from '../types/user-types'
import decodeUserToken from '../../helpers/decode-user-token';

const cookies = new Cookies();  

export const logout = () => {
    cookies.remove(cookiesName.USER);
    return {
        type: userTypes.LOGOUT
    };
}

export const login = (username, password, rememberMe) => {
    return dispatch => {
        userService.login(username, password, rememberMe)
            .then(response => {
                if (response.data && response.data.token) {
                    const token = response.data.token;
                    cookies.set(cookiesName.USER, token)
                    dispatch({
                        type: userTypes.LOGIN_SUCCESS,
                        token: token,
                        user: decodeUserToken(token)
                    });
                }
            });
    }
}