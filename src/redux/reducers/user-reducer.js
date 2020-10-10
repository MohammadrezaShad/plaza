import userTypes from '../types/user-types'
import {
  Cookies
} from 'react-cookie';
import cookiesName from '../../constants/cookiesName';

const userCookie = new Cookies().get(cookiesName.USER);

export const parseUserReducerInitialData = (value) => {
  let output = {
    loggedIn: false,
    token: null,
    user: null
  }

  if (value) {
    output.loggedIn = true;
    output.token = value;
  }

  return output;
}

const userReducer = (state = parseUserReducerInitialData(userCookie), action) => {
  switch (action.type) {

    case userTypes.LOGIN_REQUEST:
      return {
          ...state,
          loggedIn: true,
          token: action.token,
          user: action.user
      };

    case userTypes.LOGIN_SUCCESS:
      return {
          ...state,
          loggedIn: true,
          token: action.token,
          user: action.user
      };

    case userTypes.LOGIN_FAILURE:
      return {};

    case userTypes.LOGOUT:
      return {};

    default:
      return state;

  }
}


export default userReducer;