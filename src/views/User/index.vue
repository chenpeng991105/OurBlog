<template>
  <div>
    <Header/>
    <div id="main">
      <div class="content">
        <div class="content-left">
          <user-info/>
          <article-wrap :articles="articles" :isUser="true"/>
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
import UserAchievement from '@/components/UserAchievement/index'
import ArticleWrap from '@/components/ArticleWrap/index'
export default {
  components: {
    Header,
    BackToTop,
    UserInfo,
    UserAchievement,
    ArticleWrap
  },
  data(){
    return{
      articles: [
        {
          articleImg: require('@/assets/img/2.jpg'),
          articleTitle: 'JavaScript实现函数防抖和函数节流',
          articleAuthor: {
            avatar: require('@/assets/img/cyy.jpg'),
            username: 'chenyuyu'
          },
          articleInfo: {
            time: '2020-10-20',
            watch: '666',
            comments: '666',
            zan: '666'
          }
        },
        {
          articleImg: require('@/assets/img/javascript.gif'),
          articleTitle: 'JavaScript实现函数防抖和函数节流',
          articleAuthor: {
            avatar: require('@/assets/img/cyy.jpg'),
            username: 'chenyuyu'
          },
          articleInfo: {
            time: '2020-10-20',
            watch: '666',
            comments: '666',
            zan: '666'
          }
        },
        {
          articleImg: require('@/assets/img/javascript.gif'),
          articleTitle: 'JavaScript实现函数防抖和函数节流',
          articleAuthor: {
            avatar: require('@/assets/img/cyy.jpg'),
            username: 'chenyuyu'
          },
          articleInfo: {
            time: '2020-10-20',
            watch: '666',
            comments: '666',
            zan: '666'
          }
        },
        {
          articleImg: require('@/assets/img/javascript.gif'),
          articleTitle: 'JavaScript实现函数防抖和函数节流',
          articleAuthor: {
            avatar: require('@/assets/img/cyy.jpg'),
            username: 'chenyuyu'
          },
          articleInfo: {
            time: '2020-10-20',
            watch: '666',
            comments: '666',
            zan: '666'
          }
        },
        {
          //articleImg: require('@/assets/img/javascript.gif'),
          articleTitle: 'JavaScript实现函数防抖和函数节流',
          articleAuthor: {
            avatar: require('@/assets/img/cyy.jpg'),
            username: 'chenyuyu'
          },
          articleInfo: {
            time: '2020-10-20',
            watch: '666',
            comments: '666',
            zan: '666'
          }
        },
      ],
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import "../../assets/css/main";
</style>
