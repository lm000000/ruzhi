import Vue from "vue"
import VueRouter from "vue-router"
import Routes from "./option"
const notFind = () => import("../view/404.vue")
import local from "@/common/local"
import {
  fileMenu
} from "../router/action/index"

Vue.use(VueRouter)

let routes = []

routes = routes.concat(Routes).concat([
  {
  path: "*",
  component: notFind
}
])


const router = new VueRouter({
  routes: routes,
  mode: "hash"
})

// 解决报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}
router.beforeEach((to, from, next) => {

  if (!local.get("token")) {
    if (to.path != "/index") {
      next("index")
    } else {
      next()
    }
  } else {
    next()
  }

  if (to.path == "/content") {
    next(fileMenu)
  }
})

export default router
