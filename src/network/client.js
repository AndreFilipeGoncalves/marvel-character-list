import axios from 'axios'

const endPoint = 'https://gateway.marvel.com:443/v1/public/'

/** create the base instance for axios */
const instance = axios.create({
    baseURL: endPoint
})

const setDefaultQueryParams = config => {
    config.params = config.params || {}
    // add your api key here
    const apiKey = ''
    config.params.apikey = apiKey
}

/** config the interceptors for request */
instance.interceptors.request.use(config => {
    setDefaultQueryParams(config)
    return config
})

export default instance
