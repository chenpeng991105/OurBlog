<template>
  <div>
    <Header/>
    <new-article-success/>
  </div>
</template>

<script>
import Header from '@/components/Header/index'
import NewArticleSuccess from '@/components/NewArticleSuccess/index'
export default {
  components: {
    Header,
    NewArticleSuccess
  }
}
</script>

<style lang="less" scoped>

</style>
