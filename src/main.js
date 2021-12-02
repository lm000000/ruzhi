import App from "./App"
import Vue from "vue"
import router from "./router/index"
import store from "./store/index"
import { vant } from "./vant"
import { addRoutes } from "./router/action/index"
import local from "./common/local"


// 防止页面刷新  动态路由消失
if(local.get("user")){
let actionRoutes = addRoutes(local.get("user").url)
actionRoutes.forEach(item =>{
    router.addRoute("content",item)
})
}


import "../assets/css/main.css"
import "normalize.css"
Vue.use(vant.Toast)
Vue.use(vant.Icon)
new Vue({
  el: "#app",
  template: "<App/>",
  router,
  store,
  components: {
    App
  }
})


