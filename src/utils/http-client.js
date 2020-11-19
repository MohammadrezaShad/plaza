import axios from 'axios'


class HttpClient {
    constructor() {
        const service = axios.create({
            baseURL: process.env.API_URL,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });

        //service.interceptors.response.use(this.handleSuccess, this.handleError);
        this.service = service;
    }

    handleSuccess(response) {
        return response;
    }

    handleError(error) {
        switch (error.response.status) {
            case 401:
                break;
            case 404:
                break;
            default:
                break;
        }
        return Promise.reject(error)
    }


    get(url, config) {
        return this.service.get(url, config)
    }

    post(url, data, config) {
        return this.service.post(url, data, config)
    }
}

const httpClient = new HttpClient()
Object.freeze(httpClient)

export default httpClient