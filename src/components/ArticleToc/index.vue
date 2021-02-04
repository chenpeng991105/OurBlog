<template>
  <div class="box article-toc" ref="articleToc">
    <p class="title">文章目录</p>
    <div class="toc-wrap" ref="tocWrap"></div>
  </div>
</template>

<script>
import scroll from '@/utils/scroll'
import throttle from "@/utils/throttle"
export default {
  props: {
    htmlArticle: {
      type: String
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.generateArticleToc()
      document.addEventListener('scroll', this.listenScrollBar)
    })
  },
  destroyed() {
    document.removeEventListener('scroll', this.listenScrollBar)
  },
  methods: {
    generateArticleToc(){
      const div = document.createElement('div')
      div.innerHTML = this.htmlArticle
      const title = div.querySelectorAll('h1,h2,h3,h4,h5,h6')
      const articleToc = []
      title.forEach(item => {
        let obj = {
          id: item.id,
          level: parseInt(item.tagName.substr(1, 1))
        }
        articleToc.push(obj)
      })
      let maxLevel = 6
      const articleTocUl = document.createElement('ul')
      articleToc.forEach(item => {
        if(maxLevel > item.level){
          maxLevel = item.level
        }
        let diff = item.level - maxLevel;
        let li = document.createElement('li')
        let p = document.createElement('p')
        p.innerHTML = item.id
        li.id = item.id
        li.style.marginLeft = diff*10+'px'
        if(item.level == maxLevel){
          p.style.fontWeight = 'bold'
        }
        li.addEventListener('click', function (){
          scroll(document.querySelector('#'+item.id).offsetTop);
        })
        li.appendChild(p)
        articleTocUl.appendChild(li)
      })
      const tocWrap = this.$refs.tocWrap
      tocWrap.appendChild(articleTocUl)
    },
    listenScrollBar(){
      const articleToc = this.$refs.articleToc
      let scrollTop = document.documentElement.scrollTop
      if(scrollTop < 320 || scrollTop <= articleToc.offsetTop){
        articleToc.style.position = ''
        articleToc.style.top = ''
      }
      if(scrollTop > articleToc.offsetTop){
        articleToc.style.position = 'fixed'
        articleToc.style.top = '0'
      }
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import "src/assets/css/box";
.toc-wrap{
  width: 90%;
  margin: 15px auto 0;
  padding: 0 20px 15px;
  box-sizing: border-box;
  color: #213135;
  /deep/ li{
    margin: 6px 0;
    cursor: pointer;
    list-style-type: square;
  }
  /deep/ li:first-of-type{
    margin-top: 0;
  }
  /deep/ li:last-of-type{
    margin-bottom: 0;
  }
}
@media screen and (max-width: 900px){
  .article-toc{
    display: none;
  }
}
</style>
