<template>
  <div class="article-wrap">
    <template v-for="(item, index) in articles">
      <div class="article" :key="index">
        <div class="article-content">
          <h1 class="article-title">
            <a href="/article">
              {{ item.articleTitle }}
            </a>
          </h1>
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
              <i class="iconfont icon-eye"></i>
              {{ item.articleInfo.watch }}
            </p>
            <p class="comments">
              <i class="iconfont icon-comments"></i>
              {{ item.articleInfo.comments }}
            </p>
          </div>
        </div>
        <div class="article-image">
          <img alt="" :src="item.articleImg">
        </div>
        <div class="image-mask"></div>
      </div>
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
  background-color: #fff;
  border-bottom: 1px solid hsla(0,0%,59.2%,.1);
}

.article-image {
  width: 30%;
  height: 120px;
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
  width: 70%;
  height: 120px;

  .article-title {
    width: 100%;
    margin-top: 2px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 24px;
    color: #213135;
    transition: color .2s;
  }

  .article-title:hover {

  }
  .article-author{
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 10px;
    .author{
      display: flex;
      align-items: center;
      img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
      p{
        font-size: 16px;
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
    margin-top: 10px;
    margin-left: 5px;
    display: flex;
    align-items: center;

    p {
      color: #212121;
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
    height: 200px;
    margin-bottom: 20px;
    padding: 0;
    border-bottom: none;
    position: relative;
  }
  .article:last-of-type{
    margin-bottom: 0;
  }

  .article-image {
    width: 100%;
    height: 200px;
    margin-left: 0;
    position: absolute;
    top: 0;
    left: 0;

    img {
      width: 100%;
    }
  }

  .image-mask {
    width: 100%;
    height: 100%;
    border-radius: 4px;
    background-color: rgba(0, 0, 0, .3);
    position: absolute;
  }

  .article-content {
    width: 100%;
    text-align: center;
    height: auto;
    padding: 0 10px;
    box-sizing: border-box;
    border-radius: 4px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;

    .article-title, .article-data p {
      color: #fff;
    }

    .article-data {
      display: flex;
      justify-content: center;
    }
    .article-author{
      justify-content: center;
      color: #fff;
    }
  }
}
</style>
