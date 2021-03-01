<template>
  <div>
    <Header/>
    <div id="main">
      <div class="content">
        <div class="content-left">
          <article-detail :articleDetail="articleDetail"/>
        </div>
        <div class="content-right">
          <about-author/>
          <article-toc :htmlArticle="articleDetail.htmlArticle"/>
        </div>
      </div>
    </div>
    <back-to-top/>
  </div>
</template>

<script>
import Header from '@/components/Header/index'
import ArticleDetail from '@/components/ArticleDetail/index'
import AboutAuthor from '@/components/AboutAuthor/index'
import ArticleToc from '@/components/ArticleToc/index'
import Comment from '@/components/Comment/index'
import BackToTop from '@/components/BackToTop/index'
import marked from 'marked'
import { getArticle } from "@/api/article"

export default {
  components: {
    Header,
    ArticleDetail,
    AboutAuthor,
    ArticleToc,
    Comment,
    BackToTop
  },

  data(){
    return{
      articleId: '',
      articleDetail: {}
    }
  },
  created() {
    this.articleId = this.$route.params.id
    console.log(this.articleId)
    this.getArticleDetail()
  },
  methods: {
    getArticleDetail() {
      getArticle({id: 1}).then(res => {
        if (res.code == 10001) {
          console.log(res.data)
          this.articleDetail = res.data
        }
      })
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import "../../assets/css/main";
</style>
