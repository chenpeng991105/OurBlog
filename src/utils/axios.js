import axios from 'axios'
import { Message } from "element-ui"

const instance = axios.create({
    baseURL: 'http://192.168.31.36:9000',
    timeout:30 * 1000,
    withCredentials: true,
})

instance.interceptors.response.use(
    response => {
        const res = response.data
        if(res.code !== 2000){
            Message.error({
                message: res.msg
            })
            return
        }
        return res
    },
    error => {
        Message.error('请求失败，请稍后重试')
        return Promise.reject(error)
    }
)

export default instance
