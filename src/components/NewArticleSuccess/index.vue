<template>
  <div class="nas-con">
    <img src="@/assets/img/一夜暴富.svg" alt="">
    <p>发布成功！有了你的分享，<span>OurBlog</span> 会变得更好！</p>
    <div class="article-link">
      <router-link to="/article">Vue</router-link>
    </div>
    <div class="index-link">
      <router-link to="/" style="color: #2d8cf0">回到首页</router-link>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
@font-face {
  font-family: tttgbnumber;
  src: url("../../assets/fonts/tttgbnumber.eot") format("embedded-opentype"),
  url('../../assets/fonts/tttgbnumber.ttf') format("truetype"),
  url('../../assets/fonts/tttgbnumber.woff') format("woff");
}
.nas-con{
  width: 50%;
  padding: 50px;
  box-sizing: border-box;
  margin: 20px auto 0;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
  img{
    width: 130px;
  }
  p{
    margin-top: 30px;
    font-size: 20px;
    span{
      font-family: tttgbnumber,serif;
      color: #2d8cf0;
    }
  }
  .article-link{
    margin-top: 20px;
    font-size: 26px;
    text-decoration: underline;
  }
  .index-link{
    margin-top: 20px;
  }
}
@media screen and (max-width: 900px) {
  .nas-con{
    width: 100%;
  }
}
@media screen and (min-width: 900px) and (max-width: 1024px){
  .nas-con{
    width: 70%;
  }
}
@media screen and (min-width: 1024px) and (max-width: 1200px) {
  .nas-con{
    width: 60%;
  }
}
</style>
