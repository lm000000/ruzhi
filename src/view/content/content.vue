<template>
  <div class="wai-content">
    <div class="content">
      <router-view></router-view>
    </div>
    <div class="tabar">
      <tabar />
    </div>
  </div>
</template>
<script>
import tabar from "../../component/tabar"
export default {
  components: {
    tabar,
  }
}
</script>
<style scoped lang="less">
.wai-content{
  .content{


  }
  .tabar{

  }
}

</style>
