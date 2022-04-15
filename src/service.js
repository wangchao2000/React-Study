import axios from 'axios'

const isDev = process.env.NODE_ENV === 'development'
const ajax = axios.create({
    baseURL: isDev ? 'https://jsonplaceholder.typicode.com' : ''
})

ajax.interceptors.request.use((config) => {
    console.log(config)
    return config
})

ajax.interceptors.response.use((res) => {
    if (res.status === 200) {
        return res.data
    } else {
        return {
            errMsg: 'unknown error'
        }
    }
})

export const getPosts = () => {
    return ajax.get('/posts')
}