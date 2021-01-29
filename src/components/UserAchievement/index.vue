<template>
  <div class="box user-achievement">
    <p class="title">个人成就</p>
    <ul>
      <li>获得点赞 666</li>
      <li>文章被阅读 56,120</li>
      <li>评论数 999</li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import "src/assets/css/box";
.user-achievement{
  ul{
    padding: 15px 20px;
    box-sizing: border-box;
    li{
      margin: 15px 0;
    }
    li:first-of-type{
      margin-top: 0;
    }
    li:last-of-type{
      margin-bottom: 0;
    }
  }
}
</style>
