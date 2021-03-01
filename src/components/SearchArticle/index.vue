<template>
  <div>
    <div class="search-article">
      <ul class="top-line">
        <li :class="{active: activeKey === 1}" @click="activeKey = 1">文章</li>
        <li :class="{active: activeKey === 2}" @click="activeKey = 2">作者</li>
      </ul>
      <search-article-wrap :articles="articles"/>
    </div>
    <pagination :total="total" @page-change="handlePageChange"/>
  </div>
</template>

<script>
import SearchArticleWrap from '@/components/SearchArticleWrap/index'
import Pagination from '@/components/Pagination/index'
import { searchByKeyword } from "@/api/article";

export default {
  components: {
    SearchArticleWrap,
    Pagination
  },
  data() {
    return {
      activeKey: 1,
      articles: [],
      total: 0,
      page: 1,
      keyword: '',
      type: 1,
    }
  },
  created() {
    this.keyword = this.$route.query.keyword
    this.searchByKeyword()
  },
  methods: {
    searchByKeyword() {
      const { type, keyword, page } = this
      searchByKeyword({type, keyword, page}).then(res => {
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
      this.searchByKeyword()
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
