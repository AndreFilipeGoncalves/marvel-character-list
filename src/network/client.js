import axios from 'axios'

const endPoint = ''

/** create the base instance for axios */
const instance = axios.create({
    baseUrl: endPoint
})

export default instance
