<template>
  <div>
    <article-wrap :articles="articles"/>
    <pagination :total="total" @page-change="handlePageChange"/>
  </div>
</template>

<script>
import ArticleWrap from '@/components/ArticleWrap/index'
import Pagination from '@/components/Pagination/index'
import { getIndexArticle } from "@/api/article"

export default {
  components: {
    ArticleWrap,
    Pagination
  },
  data(){
    return{
      articles: [],
      hotOrNew: true,
      page: 1,
      total: 0
    }
  },
  created() {
    this.getIndexArticleData()
  },
  methods: {
    getIndexArticleData() {
      getIndexArticle({page: this.page}).then(res => {
        if (res.code == 10001) {
          console.log(res.data)
          const len = res.data.length - 1
          this.articles = res.data.slice(0, len)
          this.total = res.data[len].totalSize
        }
      })
    },
    handlePageChange(val) {
      this.page = val
      this.getIndexArticleData()
    }
  }
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
