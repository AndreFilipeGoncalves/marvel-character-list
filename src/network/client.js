import axios from 'axios'

const endPoint = 'https://gateway.marvel.com:443/v1/public/'

/** create the base instance for axios */
const instance = axios.create({
    baseURL: endPoint
})

export default instance
