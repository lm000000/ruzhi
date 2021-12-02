import axios from "./index"
import { BASE_URL , TIMEOUT } from "./setting"
axios.defaults.timeout = TIMEOUT

export const api_login =  function (){ return axios.get(`${BASE_URL}/login`) }

export const api_user =  function (params){ return axios.post(`${BASE_URL}/user`, params)}








