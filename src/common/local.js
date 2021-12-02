class local {
    get(key){
       let result =  window.localStorage.getItem(key)
       if(result){
           return JSON.parse(result)
       }
    }
    set(key,value){
        window.localStorage.setItem(key,JSON.stringify(value))
    }
    remove(key){
        window.localStorage.removeItem(key)
    }
    clear(){
        window.localStorage.clear()
    }
}
export default new local()