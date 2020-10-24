import cookiesName from '../constants/cookies-name';
import { parseCartReducerInitialData } from '../redux/reducers/cart-reducer';
import {
    parseUserReducerInitialData
} from '../redux/reducers/user-reducer';

export const getPreloadedState = (req, res) => {
    let output = {};
    const cookies = req.universalCookies.cookies;
    if (!cookies) return output;

    // user
    var userCookie = cookies[cookiesName.USER];
    output.user = parseUserReducerInitialData(userCookie);

    // cart
    var cartCookie = cookies[cookiesName.CART];
    output.cart = parseCartReducerInitialData(cartCookie);
    

    return output;
}