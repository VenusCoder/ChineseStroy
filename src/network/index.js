import axios  from "axios";


export default function request(config) {
    const instance =axios.create({
        baseURL: "http://120.24.37.75:3000",
        timeout:50000
    })
    instance.interceptors.request.use(config=>{
        return config
    },err=> {
        console.log(err)
    })

    instance.interceptors.response.use(res=>{
        return res
    },err=> {
        console.log(err)
    })

    return instance(config)
}