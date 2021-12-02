<template>
  <div>
    <div class="header">
      <Header />
    </div>
  </div>
</template>
<script>
import Header from "@/component/header.vue"

export default {
  components: {
    Header
  }
}
</script>
<style scoped lang="less">
.header{
  width:100%
}
</style>
