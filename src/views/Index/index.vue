<template>
  <div>
    <Header/>
    <div id="main">
      <div class="content">
        <div class="content-left">
          <hot-and-new/>
        </div>
        <div class="content-right">
          <author-lists/>
        </div>
      </div>
    </div>
    <back-to-top/>
  </div>
</template>

<script>
import Header from '@/components/Header/index'
import HotAndNew from '@/components/HotAndNew/index'
import AuthorLists from '@/components/AuthorLists/index'
import BackToTop from '@/components/BackToTop/index'
export default {
  components: {
    Header,
    HotAndNew,
    AuthorLists,
    BackToTop
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
      ],
    }
  },
  methods: {

  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import "../../assets/css/main";
</style>
