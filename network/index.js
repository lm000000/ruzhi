import axios from "axios"
import local from "@/common/local"

axios.interceptors.request.use(config => {
    const token = local.get("token")
    if( token ){
        config.headers.Authorization = `Bearer ${token}` 
    }
    return config
})
axios.interceptors.response.use(response => {
    return response.data
})




export default axios