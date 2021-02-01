<template>
  <div class="search-article">
    <ul class="top-line">
      <li :class="{active: activeKey === 1}" @click="activeKey = 1">综合</li>
      <li :class="{active: activeKey === 2}" @click="activeKey = 2">文章</li>
      <li :class="{active: activeKey === 3}" @click="activeKey = 3">标签</li>
      <li :class="{active: activeKey === 4}" @click="activeKey = 4">作者</li>
    </ul>
    <article-wrap :articles="articles"/>
  </div>
</template>

<script>
import ArticleWrap from '@/components/ArticleWrap/index'
export default {
  components: {
    ArticleWrap
  },
  data() {
    return {
      activeKey: 1,
      articles: [
        {
          articleImg: require('@/assets/img/bingbing.png'),
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
          articleImg: require('@/assets/img/bingbing.png'),
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
          articleImg: require('@/assets/img/bingbing.png'),
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
          articleImg: require('@/assets/img/bingbing.png'),
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
          articleImg: require('@/assets/img/bingbing.png'),
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

<style lang="less" scoped>
.search-article{
  background-color: #fff;
  .top-line{
    width: 100%;
    padding: 15px 14px;
    box-sizing: border-box;
    border-bottom: 1px solid hsla(0,0%,59.2%,.1);
    color: #909090;
    display: flex;
    font-size: 16px;
    li{
      width: 70px;
      text-align: center;
      border-right: 1px solid hsla(0,0%,59.2%,.2);
      cursor: pointer;
      &:last-of-type{
        border-right: none;
      }
      &.active{
        font-weight: bold;
        color: #2d8cf0;
      }
    }
  }
}
</style>
