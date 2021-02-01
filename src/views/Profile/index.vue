<template>
  <div>
    <Header/>
    <div id="main">
      <div class="content">
        <div class="content-left">
          <edit-profile/>
        </div>
        <div class="content-right">
        </div>
      </div>
    </div>
    <back-to-top/>
  </div>
</template>

<script>
import Header from '@/components/Header/index'
import EditProfile from '@/components/EditProfile/index'
import BackToTop from '@/components/BackToTop/index'
export default {
  components: {
    Header,
    EditProfile,
    BackToTop
  }
}
</script>

<style lang="less" scoped>
@import "../../assets/css/main";
</style>
