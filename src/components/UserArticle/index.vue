<template>
  <div>
    <article-wrap :articles="articles" :isUser="true"/>
    <pagination/>
  </div>
</template>

<script>
import ArticleWrap from '@/components/ArticleWrap/index'
import Pagination from '@/components/Pagination/index'
import { getUserArticle } from "@/api/article"
export default {
  components: {
    ArticleWrap,
    Pagination
  },
  data(){
    return{
      articles: [
        {
          articleId: 1,
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
      ],
    }
  },
  created() {
    this.getUserArticle()
  },
  methods: {
    getUserArticle() {
      getUserArticle({uId: 1, page: 1}).then(res => {
        console.log(res.data)
      })
    }
  }
}
</script>

<style lang="less" scoped>

</style>
