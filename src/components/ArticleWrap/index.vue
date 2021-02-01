<template>
  <div class="article-wrap">
    <template v-for="(item, index) in articles">
      <a href="/article" :key="index" class="article-link">
        <div class="article">
          <div class="article-content">
            <h1 class="article-title">
              {{ item.articleTitle }}
            </h1>
            <div class="article-summary" v-if="item.articleSummary">
              Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。
            </div>
            <div class="article-author">
              <a href="" class="author">
                <img :src="item.articleAuthor.avatar" alt="">
                <p>{{item.articleAuthor.username}}</p>
              </a>
              <p class="time">
                {{ item.articleInfo.time }}
              </p>
            </div>
            <div class="article-data">
              <p class="zan">
                <i class="iconfont icon-zan"></i>
                {{ item.articleInfo.zan }}
              </p>
              <p class="watch">
                <i class="iconfont icon-watch"></i>
                {{ item.articleInfo.watch }}
              </p>
            </div>
          </div>
          <div class="article-image">
            <img alt="" :src="item.articleImg">
          </div>
          <div class="image-mask"></div>
        </div>
      </a>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    articles: {
      type: Array
    }
  },
  data() {
    return {}
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
.article {
  width: 100%;
  height: auto;
  padding: 20px 25px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid hsla(0,0%,59.2%,.1);
}
.article-link{
  display: block;
  background-color: #fff;
  &:hover{
    background-color: #fcfcfc;
  }
}
.article-image {
  width: 25%;
  height: 110px;
  margin-left: 20px;
  border-radius: 4px;
  overflow: hidden;
  img {
    width: 100%;
    height: inherit;
    object-fit: cover;
  }
  img[src=""],img:not([src]){opacity:0;}
}

.article-content {
  width: 75%;
  flex: 1;
  .article-title {
    width: 100%;
    margin-top: 2px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 22px;
    color: #213135;
    transition: color .2s;
  }
  .article-summary{
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: 10px;
    font-size: 14px;
    color: #5b6169;
  }
  .article-author{
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 3px;
    font-size: 16px;
    color: #213135;
    .author{
      display: flex;
      align-items: center;
      img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
    }
    .author:hover{
      color: #2d8cf0;
    }
    .author:after{
      content: '·';
      margin: 0 5px;
    }
    .time{
      margin-top: 2px;
      font-size: 14px;
    }
  }

  .article-data {
    width: 100%;
    margin-top: 8px;
    margin-left: 5px;
    display: flex;
    align-items: center;

    p {
      color: #666;
      font-size: 14px;
      margin-right: 20px;
      display: flex;
      align-items: center;

      i {
        margin-right: 3px;
        vertical-align: middle;
      }
    }
  }
}

@media screen and (max-width: 900px) {
  .article {
    width: 100%;
    padding: 15px;
    display: block;
    border-bottom: 1px solid hsla(0,0%,59.2%,.1);
  }
  .article-image {
    display: none;
  }

  .article-content {
    width: 100%;
    padding: 0 10px;
    box-sizing: border-box;
    border-radius: 4px;
    z-index: 10;
    .article-title{
      font-size: 18px;
    }
    .article-author{
      font-size: 14px;
    }
  }
}
</style>
