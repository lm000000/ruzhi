let BASE_URL = ""
let TIMEOUT = 5000
if (process.env.NODE_ENV === "development"){
    BASE_URL = "/api"
}else if(process.env.NODE_ENV === "production"){
    URL = ""
}
export { BASE_URL , TIMEOUT }