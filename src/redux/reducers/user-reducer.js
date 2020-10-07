import userTypes from '../types/user-types'
import {
  Cookies
} from 'react-cookie';

const initialState = {
  loggedIn: false,
  token: null,
  user: null
}

// const userCookie = new Cookies().get('_t');
// if (!userCookie) {
//   initialState.loggedIn = true;
//   initialState.token = userCookie;
// }



const userReducer = (state = initialState, action) => {
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

    case userTypes.LOGIN_SET_TOKEN:
      return {
          ...state,
          loggedIn: true,
          token: action.token,
          user: action.user
      };

    case userTypes.LOGOUT:
      return {};

    default:
      return state;

  }
}


export default userReducer;