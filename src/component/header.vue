<template>
  <div class="header">
    <div class="input">
      <input type="text" v-model="input">
    </div>
    <img src="../../assets/img/sousuo.jpg">
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: ""
    }
  }
}
</script>
<style scoped lang="less">
.header {
  height: 100px;
  overflow: hidden;
  width: 100%;
  .input{
    position: absolute;
    z-index: 2;
    input{
      width:300px;
      height: 30px;
      border-radius: 100px;

      margin:0  auto

    }
  }
  img {
    width: 100%;
    position: relative;
    top: -40px;
  }
}
</style>
