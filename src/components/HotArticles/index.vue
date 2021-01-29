<template>
  <div class="box">
    <p class="title">热门文章</p>
    <ul class="articles">
      <li>
        <a href="">
          <img alt="" src="@/assets/img/2.jpg">
          <div class="mask"></div>
          <p class="article-name">Mybatis动态SQL</p>
          <p class="article-data">
            <span class="read">666阅读</span>
            <span class="date">2020/10/14</span>
          </p>
        </a>
      </li>
      <li>
        <a href="">
          <img alt="" src="@/assets/img/2.jpg">
          <div class="mask"></div>
          <p class="article-name">Mybatis动态SQL</p>
          <p class="article-data">
            <span class="read">666阅读</span>
            <span class="date">2020/10/14</span>
          </p>
        </a>
      </li>
      <li>
        <a href="">
          <img alt="" src="@/assets/img/2.jpg">
          <div class="mask"></div>
          <p class="article-name">Mybatis动态SQL</p>
          <p class="article-data">
            <span class="read">666阅读</span>
            <span class="date">2020/10/14</span>
          </p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import "src/assets/css/box";
.articles{
  margin-top: 15px;
  padding: 0 15px;
  box-sizing: border-box;
  li{
    width: 100%;
    height: 165px;
    margin-bottom: 15px;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    img{
      width: 100%;
      height: 165px;
      object-fit: cover;
      transform: scale(1);
      transition: transform .5s;
    }
    .mask{
      width: 100%;
      height: 80px;
      border-radius: 4px;
      position: absolute;
      bottom: 0;
      left: 0;
      background: linear-gradient(transparent, rgba(0, 0, 0, .6));
    }
    .article-name{
      position: absolute;
      bottom: 26px;
      left: 10px;
      font-size: 16px;
      color: #fff;
    }
    .article-data{
      position: absolute;
      bottom: 6px;
      left: 10px;
      font-size: 13px;
      color: #ccc;
      span{
        margin-right: 8px;
      }
    }
  }
  li:last-of-type{
    margin-bottom: 0;
  }
  li:hover img{
    transform: scale(1.15);
  }
}
</style>
