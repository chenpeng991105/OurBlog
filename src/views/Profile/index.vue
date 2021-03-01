<template>
  <div>
    <Header/>
    <div id="main">
      <div class="content">
        <div class="content-left">
          <edit-profile :user="user"/>
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
import {findUser} from "@/api/user";
export default {
  components: {
    Header,
    EditProfile,
    BackToTop
  },
  data() {
    return {
      user: {}
    }
  },
}
</script>

<style lang="less" scoped>
@import "../../assets/css/main";
</style>
