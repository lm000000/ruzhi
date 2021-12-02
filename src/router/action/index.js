let fileMenu
export function addRoutes(data) {
  let AllRoutes = []
  let fileRoutes = []
  let actionRoutes = []
  fileRoutes = require.context("../content",true,/\.js/)
  fileRoutes.keys().forEach(item =>{
     let itemRoute = require("../content" + item.split(".")[1])
    //  将全部的路由信息添加到AllRoutes
     AllRoutes.push(itemRoute.default)
  })
  function filterRoutes(value) {
    value.forEach(item => {
      let arr = AllRoutes.find((i)=>{
          return i.path === item
      })
      if(!fileMenu){
         fileMenu = arr.path
      }
      actionRoutes.push(arr)
    })
  }
  filterRoutes(data)
  return actionRoutes
}
export { fileMenu }
