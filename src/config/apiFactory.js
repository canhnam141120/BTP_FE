import axios from 'axios'

const objectToParams = (obj) => Object.keys(obj).reduce(function(previousValue, currentValue) {
    previousValue.push(currentValue + '=' + obj[currentValue])
    return previousValue
}, []).join('&')

class ApiFactory {
    static callApi(api, httpMethod,payload={}, params){
        let url
        if(params){
            url = `${api}?${objectToParams(params)}`
        } else  url = api
        return axios({
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            method: httpMethod,
            baseURL: url,
            data: payload,
        }).then(res => {
            return res
        }, err => {
            throw err
        })
    }
}

export default ApiFactory