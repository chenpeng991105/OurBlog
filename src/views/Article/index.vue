<template>
  <div>
    <Header/>
    <div id="main">
      <div class="content">
        <div class="content-left">
          <article-detail :articleDetail="articleDetail"/>
          <comment/>
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
export default {
  components: {
    Header,
    ArticleDetail,
    AboutAuthor,
    ArticleToc,
    Comment,
    BackToTop
  },
  mounted() {
    this.articleDetail.htmlArticle = marked(this.articleDetail.mdArticle);
  },
  data(){
    return{
      articleDetail: {
        articleImg: require('@/assets/img/2.jpg'),
        articleTitle: 'JavaScript实现函数防抖和函数节流',
        articleTags: ['JavaScript', 'code'],
        articleData: {
          time: '2020-10-20',
          watch: '666'
        },
        mdArticle: '## 函数防抖和节流\n' +
            '\n' +
            '函数防抖和节流是为了解决用户在某一时间内频繁提交请求，给服务器造成压力的情况\n' +
            '\n' +
            '### 函数防抖\n' +
            '在一定时间内，连续触发同一事件，只执行一次（只在最后一次执行或第一次执行）\n' +
            '\n' +
            '定时器实现 ：\n' +
            '\n' +
            '```js\n' +
            '// 只在最后一次执行\n' +
            'function debounce(fn, delay) {\n' +
            '    let timer = null;\n' +
            '    return () => {\n' +
            '        if(timer){\n' +
            '            //第一次触发时不会执行，后续触发时会清除定时器\n' +
            '            clearTimeout(timer);\n' +
            '        }\n' +
            '        timer = setTimeout(() => {\n' +
            '            fn.apply(this, arguments);\n' +
            '        }, delay)\n' +
            '    }\n' +
            '}\n' +
            '\n' +
            '// 只在第一次执行\n' +
            'function debounce(fn, delay) {\n' +
            '    let timer = null;\n' +
            '    return () => {\n' +
            '        if(timer){\n' +
            '            clearTimeout(timer);\n' +
            '        }\n' +
            '        let callNow = !timer;\n' +
            '        // 后续如果没有触发，则将timer初始化为null\n' +
            '        timer = setTimeout(() => {\n' +
            '            timer = null;\n' +
            '        }, delay);\n' +
            '        if(callNow){\n' +
            '            fn.apply(this, arguments);\n' +
            '        }\n' +
            '    }\n' +
            '}\n' +
            '```\n' +
            '\n' +
            '时间戳实现：\n' +
            '\n' +
            '```js\n' +
            'function debounce(fn, delay) {\n' +
            '    let pre = 0;\n' +
            '    return () => {\n' +
            '        let now = new Date();\n' +
            '        if(now - pre > delay){\n' +
            '            fn.apply(this, arguments);\n' +
            '        }\n' +
            '        pre = now;\n' +
            '    }\n' +
            '}\n' +
            '```\n' +
            '\n' +
            '### 函数节流\n' +
            '在单位时间内，连续触发同一事件，只执行一次\n' +
            '\n' +
            '定时器实现：\n' +
            '\n' +
            '```js\n' +
            'function throttle(fn, delay) {\n' +
            '    let flag = true;\n' +
            '    return () => {\n' +
            '        if(!flag) return; // flag为false时，直接返回\n' +
            '        flag = false;\n' +
            '        setTimeout(() => {\n' +
            '            fn.apply(this, arguments);\n' +
            '            // 执行完fn函数再将flag重置为true\n' +
            '            flag = true;\n' +
            '        }, delay)\n' +
            '    }\n' +
            '}\n' +
            '\n' +
            '// 或者\n' +
            'function throttle(fn, delay) {\n' +
            '    let timer = null;\n' +
            '    return () => {\n' +
            '        if(!timer){ // timer为null时才设置定时器\n' +
            '            timer = setTimeout(() => {\n' +
            '                //执行完fn函数后将timer重置为null\n' +
            '                fn.apply(this, arguments);\n' +
            '                timer = null;\n' +
            '            },delay)\n' +
            '        }\n' +
            '    }\n' +
            '}\n' +
            '```\n' +
            '\n' +
            '时间戳实现：\n' +
            '\n' +
            '```js\n' +
            'function throttle(fn, delay) {\n' +
            '    let pre = 0;\n' +
            '    return () => {\n' +
            '        let now = new Date();\n' +
            '        if(now - pre > delay){\n' +
            '            fn.apply(this, arguments);\n' +
            '            pre = now;\n' +
            '        }\n' +
            '    }\n' +
            '}\n' +
            '```',
        htmlArticle: '',
      },
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import "../../assets/css/main";
</style>
