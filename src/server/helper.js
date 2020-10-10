import cookiesName from '../constants/cookiesName';
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

    return output;
}