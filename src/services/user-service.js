import httpClient from '../utils/http-client';



const login = (username, password, isPersistent) => {
    return httpClient.post(`${process.env.API_URL}/auth/login`,{
        username,
        password,
        isPersistent
    });
}

export default {
    login
}