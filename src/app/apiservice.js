import axios from  'axios'

const httpClient = axios.create({
    baseURL: 'http://localhost:8080'
})

class ApiService {

    constructor(apiurl) {
        this.apiurl = apiurl;
    }

    post(url, obj) {
        const requestUrl = `${this.apiurl}${url}`
        return httpClient.post(requestUrl, obj);
    }

    put(url, obj) {
        const requestUrl = `${this.apiurl}${url}`
        return httpClient.put(requestUrl, obj);
    }

    get(url) {
        const requestUrl = `${this.apiurl}${url}`
        return httpClient.get(requestUrl);
    }

    delete(url) {
        const requestUrl = `${this.apiurl}${url}`
        return httpClient.delete(requestUrl);
    }
}

export default ApiService;