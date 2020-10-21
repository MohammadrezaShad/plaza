import jwtDecode from 'jwt-decode'

const decodeUserToken = (token) => {
    const data = jwtDecode(token);
    const user = {
        firstName: data.given_name,
        lastName: data.family_name,
        level: data.level,
        point: data.point,
        wholeSalingName: data.wholeSalingName,
        wholeSalingState: data.wholeSalingState
    };

    return user;
}

export default decodeUserToken