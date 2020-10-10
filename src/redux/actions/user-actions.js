import userService from '../../services/user-service'
import userTypes from '../types/user-types'

export const logout = () => {
    userService.logout();
    return { type: userTypes.LOGOUT };
}




