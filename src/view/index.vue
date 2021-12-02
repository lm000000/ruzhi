<template>
  <div class="index">
    <div class="content">
      <h1>学习小帮手</h1>
      <div class="title">账号:
        <input v-model="username" />
      </div>
      <div class="title">密码:
        <input type="password" v-model="password" />
      </div>
      <div class="remember">记住密码
        <input type="checkbox" class="checkbox" :checked="isChecked" @click="clickChecked">
      </div>
      <div class="footer">
        <div @click="submit">登录</div>
        <div>注册</div>
      </div>
    </div>
  </div>
</template>
<script>
import local from "../common/local"
import { api_login, api_user } from "../../network/api"
import { addRoutes } from "../router/action/index"
import router from '@/router/index'
export default {
  data(){
    return{
      username: "",
      password: "",
      isChecked: true
    }
  },
  mounted(){
    if(this.isChecked && local.get("user")){
      this.username = local.get("user").username ?? ""
      this.password = local.get("user").password ?? ""
    }
  },
  methods: {
    submit() {
      this.request()
    },
    async request() {
      let _th = this
      function request1() {
        return new Promise((reject) => {
          api_login().then((res) => {
            local.set("token", res)
            reject("成功")
          })
        })
      }
      function request2() {
        return new Promise(() => {
          let params = {
            username: _th.username,
            password: _th.password
          }
          api_user(params).then(res => {
            local.set("user",res)
            let actionRoutes = addRoutes(res.url)
            actionRoutes.forEach(item =>{
              router.addRoute("content",item)
            })
            _th.$router.push("/content")
          })
        })
      }
      let result = await request1()
      if (result === "成功") {
        await request2()
      }
    },
    clickChecked(){

    }
  }
}
</script>
<style scoped lang="less">
.index {
  width: 100%;
  height: 100%;
  .content {
    width: 80%;
    height: 50%;
    line-height: 6rem;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    text-align: center;
    .footer {
      display: flex;
      > div {
        flex: 1;
        margin-top: 2rem;
        font-size: 2rem;
      }
    }
    .remember{
      position: relative;
      left: -8rem;
      font-size: 1.5rem;
      .checkbox{
        width:20px;
        height: 20px;
        position: relative;
        top:0.3rem
      }
    }
  }
}
input {
  border-left: none;
  border-right: none;
  border-top: none;
  width: 70%;
  height: 40px;
}
</style>
