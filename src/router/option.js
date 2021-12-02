const index = () => import("@/view/index.vue")
const content = () => import("@/view/content/content")

const Routes = [{
    path: "",
    redirect: "/index"
  },
  {
    path: "/index",
    name: "index",
    component: index
  },
  {
    path: "/content",
    name: "content",
    component: content,
  },




  {
    path: "/content/aa",
    name: "content",
    component: content,
  },

]
export default Routes
