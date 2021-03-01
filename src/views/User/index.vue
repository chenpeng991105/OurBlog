<template>
  <div>
    <Header/>
    <div id="main">
      <div class="content">
        <div class="content-left">
          <user-info :user="user"/>
          <user-article/>
        </div>
        <div class="content-right">
          <user-achievement/>
        </div>
      </div>
    </div>
    <back-to-top/>
  </div>
</template>

<script>
import Header from '@/components/Header/index'
import BackToTop from '@/components/BackToTop/index'
import UserInfo from '@/components/UserInfo/index'
import UserArticle from '@/components/UserArticle/index'
import UserAchievement from '@/components/UserAchievement/index'
import ArticleWrap from '@/components/ArticleWrap/index'
import {findUser} from "@/api/user";

export default {
  components: {
    Header,
    BackToTop,
    UserInfo,
    UserArticle,
    UserAchievement,
    ArticleWrap
  },
  data() {
    return {
      user: {}
    }
  },
  created() {
    const uId = this.$route.params.id
    console.log(uId)
    findUser({uId}).then(res => {
      if (res.code == 10001) {
        console.log(res.data)
        if (!res.data.github) {
          res.data.github = 'https://www.github.com'
        }
        this.user = res.data
      }
    })
  },
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import "../../assets/css/main";
</style>
