<template>
  <div class="article-wrap">
    <template v-for="(item, index) in articles">
      <div @click="$router.push('/article')" :key="index" class="article-link">
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
              <div class="item zan">
                <i class="iconfont icon-zan"></i>
                {{ item.articleInfo.zan }}
              </div>
              <div class="item watch">
                <i class="iconfont icon-watch"></i>
                {{ item.articleInfo.watch }}
              </div>
              <div class="item more" v-if="isUser" @click.stop="showMoreBox">
                <i class="iconfont icon-more"></i>
                <ul class="more-box" v-show="moreBoxVisible">
                  <li @click="editArticle">编辑</li>
                  <li @click="deleteArticle">删除</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="article-image">
            <img alt="" :src="item.articleImg">
          </div>
          <div class="image-mask"></div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    articles: Array,
    isUser: Boolean
  },
  data() {
    return {
      moreBoxVisible: false
    }
  },
  methods: {
    showMoreBox() {
      this.moreBoxVisible = !this.moreBoxVisible
    },
    editArticle() {

    },
    deleteArticle() {

    },
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
  cursor: pointer;
  &:hover{
    background-color: #fcfcfc;
  }
  &:hover .article-content .article-data .item.more{
    display: flex;
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
    font-size: 20px;
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
    margin-top: 5px;
    font-size: 16px;
    color: #213135;
    .author{
      display: flex;
      align-items: center;
      img{
        width: 35px;
        height: 35px;
        border-radius: 50%;
        margin-right: 5px;
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
    display: flex;
    align-items: center;

    .item {
      display: flex;
      align-items: center;
      color: #666;
      font-size: 13px;
      height: 26px;
      padding: 0 8px;
      border: 1px solid #e0e0e0;
      &.watch{
        border-left: none;
      }
      &.more{
        position: relative;
        display: none;
        border-left: none;
      }
      i {
        margin-right: 4px;
        font-size: 14px;
        vertical-align: middle;
      }
      .more-box{
        position: absolute;
        top: 30px;
        left: -10px;
        width: 100px;
        color: #909090;
        background-color: #fff;
        border: 1px solid #ddd;
        border-radius: 2px;
        box-shadow: 0 1px 2px #f1f1f1;
        z-index: 10;
        li{
          height: 30px;
          line-height: 30px;
          padding-left: 15px;
          background-color: #fff;
          user-select: none;
          &:hover{
            background-color: #f8f8f8;
          }
        }
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
