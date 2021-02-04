<template>
  <div>
    <Header/>
    <div id="main">
      <div class="content">
        <div class="content-left">
          <tool-list/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header/index'
import ToolList from '@/components/ToolList/index'
export default {
  components: {
    Header,
    ToolList
  }
}
</script>

<style lang="less" scoped>
@import "../../assets/css/main";
</style>
