<template>
  <div class="hot-new">
    <div class="top-line">
      <p :class="{active : hotOrNew}" @click="hotOrNew = true">热门</p>
      <span>|</span>
      <p :class="{active : !hotOrNew}" @click="hotOrNew = false">最新</p>
    </div>
    <div class="hot" :style="{display : hotOrNew ? 'block' : 'none'}">
      <article-wrap :articles="articles"/>
    </div>
    <div class="new" :style="{display : hotOrNew ? 'none' : 'block'}">
      <article-wrap :articles="articles"/>
    </div>
  </div>
</template>

<script>
import ArticleWrap from '@/components/ArticleWrap/index'
export default {
  components: {
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
      hotOrNew: true
    }
  },
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
.hot-new{
  background-color: #fff;
  .top-line{
    width: 100%;
    padding: 15px 14px;
    box-sizing: border-box;
    border-bottom: 1px solid hsla(0,0%,59.2%,.1);
    color: #909090;
    display: flex;
    font-size: 16px;
    p{
      width: 60px;
      text-align: center;
      cursor: pointer;
    }
    p.active{
      font-weight: bold;
      color: #2d8cf0;
    }
  }
}
@media screen and (max-width: 900px){
  .hot-new{
    padding: 0 10px 10px 10px;
    .top-line{
      justify-content: center;
    }
  }
}
</style>
