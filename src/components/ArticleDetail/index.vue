<template>
  <div class="article-wrap" v-if="articleDetail">
    <div class="article-author">
      <router-link :to="`/user/${articleDetail.authorId}`">
        <img :src="'https://yudachi.oss-cn-shenzhen.aliyuncs.com/'+articleDetail.authorImg" alt="" class="avatar">
      </router-link>
      <div class="author-info">
        <a href="" class="username">{{articleDetail.authorName}}</a>
        <div class="article-data" v-if="articleDetail.articleData">
          <p class="time">
            <span>{{articleDetail.articleData.time}}</span>
          </p>
          <p class="watch">
            阅读
            <span>{{articleDetail.articleData.watch}}</span>
          </p>
        </div>
      </div>
    </div>
    <div class="article-banner">
      <img alt="" class="banner" :src="'https://yudachi.oss-cn-shenzhen.aliyuncs.com/'+articleDetail.articleImg">
    </div>
    <div class="article-title">
      <h1>{{articleDetail.articleTitle}}</h1>
    </div>
    <div class="article-detail" v-html="articleDetail.htmlArticle" v-highlight></div>
    <div class="img-preview" v-show="imgPreviewVisible">
      <img src="" alt="" @click="closeImgPreview">
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import highlight from 'highlight.js'
import throttle from "@/utils/throttle";

Vue.directive('highlight', function (el){
  const code = el.querySelectorAll('pre code');
  code.forEach(item => {
    highlight.highlightBlock(item);
  })
})
export default {
  props: {
    articleDetail: Object
  },
  data(){
    return{
      imgPreviewVisible: false,
    }
  },
  mounted() {
    this.$nextTick(() => {
      const imgs = document.querySelector('.article-detail').querySelectorAll('p img')
      const previewImg = document.querySelector('.img-preview img')
      imgs.forEach(img => {
        img.addEventListener('click', () => {
          this.imgPreviewVisible = true
          previewImg.src = img.src
        })
      })
    })
    let checkIsDownThrottle = throttle(this.checkIsDown, 2000)
    document.addEventListener('scroll', checkIsDownThrottle)
  },
  methods: {
    closeImgPreview() {
      this.imgPreviewVisible = false
    },
    checkIsDown() {
      let { scrollTop, scrollHeight, clientHeight } = document.documentElement
      if (scrollHeight - (scrollTop + clientHeight) < 1) {
        this.articleDetail.articleData.watch++
      }
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import "src/assets/css/common";

.article-wrap{
  background-color: #fff;
  padding: 20px 25px 10px;
  box-sizing: border-box;
  border-radius: 2px;
  .img-preview{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,.8);
    z-index: 1000;
    img{
      width: auto;
      height: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      cursor: zoom-out;
    }
  }
}
.article-author{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .avatar{
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
  .author-info{
    width: 100%;
    margin-left: 10px;
    flex: 1;
    .username{
      display: inline-block;
      width: 100%;
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 5px;
      color: #213135;
    }
    .article-data{
      display: flex;
      color: #909090;
      font-size: 16px;
      .time{
        margin-right: 10px;
      }
    }
  }
  .follow{
    width: 60px;
    height: 30px;
    line-height: 30px;
    font-size: 16px;
    border: 1px solid #1e90ff;
    color: #1e90ff;
    background-color: #fff;
    border-radius: 2px;
    outline: none;
    cursor: pointer;
  }

  .follow:hover {
    background-color: #fafafa;
  }
}
.article-title{
  font-size: 20px;
  margin: 20px 0;
  color: #213135;
  h1{
    font-weight: normal;
  }
}
.article-banner {
  width: 100%;
  height: 350px;
  margin: 20px 0;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.article-detail{
  width: 100%;
  padding-bottom: 10px;
  background-color: #fff;
  /deep/ h1, /deep/ h2{
    margin: 15px 0;
    padding-bottom: 10px;
    border-bottom: 1px solid #eaecef;
    color: #213135;
  }
  /deep/ h3, /deep/ h4, /deep/ h5, /deep/ h6{
    margin: 15px 0;
    color: #213135;
  }
  /deep/ ul{
    padding-left: 25px;
    margin-bottom: 15px;
    color: #213135;
    li{
      line-height: 30px;
    }
  }
  /deep/ pre {
    display: block;
    margin: 10px 0;
    line-height: 1.5;
    color: #213135;
  }
  /deep/ code{
    font-family: Consolas, "Microsoft YaHei", serif !important;
    border-radius: 4px;
  }
  /deep/ p{
    margin: 5px 0;
    line-height: 1.5;
    color: #213135;
    img{
      width: 100%;
      cursor: zoom-in;
    }
  }
  /deep/ span{
    line-height: 1.5;
  }
}

/deep/ .hljs {
  display: block;
  overflow-x: auto;
  padding: 15px;
  background: #111;
  color: #d6deeb;
}

/* General Purpose */
/deep/ .hljs-keyword {
  color: #c792ea;
  font-style: italic;
}

/deep/ .hljs-built_in {
  color: #1dd1a1;
  font-style: italic;
}

/deep/ .hljs-type {
  color: #82aaff;
}

/deep/ .hljs-literal {
  color: #ff5874;
}

/deep/ .hljs-number {
  color: #F78C6C;
}

/deep/ .hljs-regexp {
  color: #5ca7e4;
}

/deep/ .hljs-string {
  color: #ecc48d;
}

/deep/ .hljs-subst {
  color: #d3423e;
}

/deep/ .hljs-symbol {
  color: #82aaff;
}

/deep/ .hljs-class {
  color: #ffcb8b;
}

/deep/ .hljs-function {
  color: #82AAFF;
}

/deep/ .hljs-title {
  color: #DCDCAA;
  font-style: italic;
}

/deep/ .hljs-params {
  color: #7fdbca;
}

/* Meta */
/deep/ .hljs-comment {
  color: #637777;
  font-style: italic;
}

/deep/ .hljs-doctag {
  color: #7fdbca;
}

/deep/ .hljs-meta {
  color: #82aaff;
}

/deep/ .hljs-meta-keyword {
  color: #82aaff;
}

/deep/ .hljs-meta-string {
  color: #ecc48d;
}

/* Tags, attributes, config */
/deep/ .hljs-section {
  color: #82b1ff;
}

/deep/ .hljs-tag,
/deep/ .hljs-name,
/deep/ .hljs-builtin-name {
  color: #7fdbca;
}

/deep/ .hljs-attr {
  color: #7fdbca;
}

/deep/ .hljs-attribute {
  color: #80cbc4;
}

/deep/ .hljs-variable {
  color: #55efc4;
}

/* Markup */
/deep/ .hljs-bullet {
  color: #d9f5dd;
}

/deep/ .hljs-code {
  color: #80CBC4;
}

/deep/ .hljs-emphasis {
  color: #c792ea;
  font-style: italic;
}

/deep/ .hljs-strong {
  color: #55efc4;
  font-weight: bold;
}

/deep/ .hljs-formula {
  color: #c792ea;
}

/deep/ .hljs-link {
  color: #ff869a;
}

/deep/ .hljs-quote {
  color: #697098;
  font-style: italic;
}

/* CSS */
/deep/ .hljs-selector-tag {
  color: #ff6363;
}

/deep/ .hljs-selector-id {
  color: #fad430;
}

/deep/ .hljs-selector-class {
  color: #1dd1a1;
  font-style: italic;
}

/deep/ .hljs-selector-attr,
/deep/ .hljs-selector-pseudo {
  color: #c792ea;
  font-style: italic;
}

/* Templates */
/deep/ .hljs-template-tag {
  color: #c792ea;
}

/deep/ .hljs-template-variable {
  color: #addb67;
}

/* diff */
/deep/ .hljs-addition {
  color: #addb67ff;
  font-style: italic;
}

/deep/ .hljs-deletion {
  color: #EF535090;
  font-style: italic;
}
@media screen and (max-width: 1024px){
  .article-title{
    font-size: 18px;
  }
}
@media screen and (max-width: 900px){
  .article-wrap{
    padding: 15px 20px;
    .img-preview{
      img{
        width: 100%;
        height: auto;
      }
    }
  }
  .article-banner{
    height: 200px;
  }
  .article-title{
    font-size: 16px;
  }
  .article-detail {
    /deep/ h1, /deep/ h2, /deep/ h3, /deep/ h4, /deep/ h5, /deep/ h6 {
      font-weight: normal;
    }
  }
}

</style>
