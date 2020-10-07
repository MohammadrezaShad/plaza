import userService from '../../services/user-service'
import userTypes from '../types/user-types'

export const logout = () => {
    userService.logout();
    return { type: userTypes.LOGOUT };
}


export const setToken = (token) => {
    return { type: userTypes.LOGIN_SET_TOKEN, token:token };
}


