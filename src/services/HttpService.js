import axios from 'axios'

const BASE_URL = process.env.NODE_ENV === 'production'
    ? '/'
    : '//localhost:3000/'

async function ajax(endpoint, method='get', data=null, params=null) {
    try {
        const res = await axios({
            url: `${BASE_URL}${endpoint}`,
            method,
            data,
            params
        })
        return res.data;
    } catch (err) {
        if (err.response.status === 401) {
        }
        throw err
    }
}

export default {
    get(endpoint, params){
        return ajax(endpoint, 'GET', null, params )
    },
    post(endpoint, data){
        return ajax(endpoint, 'POST', data)
    },
    put(endpoint, data){
        return ajax(endpoint, 'PUT', data)
    },
    delete(endpoint, data){
        return ajax(endpoint, 'DELETE', data)
    }

}
