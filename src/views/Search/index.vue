<template>
  <div>
    <Header/>
    <div id="main">
      <div class="content">
        <div class="content-left">
          <search-article/>
          <pagination/>
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
import SearchArticle from '@/components/SearchArticle/index'
import Pagination from '@/components/Pagination/index'
import BackToTop from '@/components/BackToTop/index'
export default {
  components: {
    Header,
    SearchArticle,
    Pagination,
    BackToTop
  }
}
</script>

<style lang="less" scoped>
@import "../../assets/css/main";
</style>
