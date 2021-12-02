<template>
  <div class="tabar">
    <div class="tabarItem" v-for="(item,index) in menus" :key="index" @click="jump(item.flag,index)">
      <van-icon :name="item.icon" size="2rem" />
      <div class="tabarName">{{ item.name }}</div>
    </div>
  </div>
</template>
<script>
import local from "../common/local"
export default {
  created() {
    this.menus = local.get("user").menus
  },
  mounted(){
    document.querySelectorAll('.tabarItem')[0].style.color = "red"
  },
  data() {
    return {
      menus: [],
      tabarClass: false,
    }
  },
  methods: {
    jump(data,index){
      document.querySelectorAll(".tabarItem").forEach(item=>{
        item.style.color = ""
      })
      this.$router.push("/content/"+data+"/index")
      document.querySelectorAll('.tabarItem')[index].style.color = "red"
    }
  }
}
</script>
<style scoped lang="less">
.tabar {
  width: 100%;
  height: 75px;
  position: fixed;
  border-top:1px solid black;
  bottom: 0;
  display: flex;
  padding:1rem;
  box-sizing: border-box;
  & > div{
    flex: 1;
    text-align: center;
  }
  .tabarName{
    margin-top:0.5rem;
    font-size: 1.2rem;
  }
}
.class1{
  color: red;
}
</style>
