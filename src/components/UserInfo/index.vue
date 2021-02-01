<template>
  <div class="user-info">
    <div class="avatar">
      <img src="@/assets/img/user.jpg" alt="">
    </div>
    <div class="info">
      <p class="username">WU</p>
      <p class="desc">Java后端攻城狮</p>
    </div>
    <div class="meta">
      <div class="user-link">
        <a href="" class="link">
          <i class="iconfont icon-github"></i>
        </a>
        <a href="" class="link">
          <i class="iconfont icon-gitee"></i>
        </a>
      </div>
      <button class="follow" @click="$router.push('/profile')">编辑个人资料</button>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" rel="stylesheet/less" scoped>
.user-info{
  width: 100%;
  border-radius: 2px;
  background-color: #fff;
  padding: 20px;
  margin-bottom: 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  .avatar{
    img{
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }
  }
  .info{
    width: 100%;
    flex: 1;
    margin-left: 20px;
    .username{
      font-size: 30px;
      font-weight: bold;
      margin-bottom: 20px;
    }
    .desc{
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: #72777b;
    }
  }
  .meta{
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    .user-link{
      width: 100%;
      margin-bottom: 30px;
      display: flex;
      justify-content: flex-end;
      .link{
        margin-left: 20px;
        font-size: 20px;
        .icon-gitee{
          color: #c71d24;
        }
      }
    }
    .follow{
      width: 120px;
      height: 40px;
      line-height: 40px;
      font-size: 16px;
      border: 1px solid #1e90ff;
      color: #1e90ff;
      background-color: #fff;
      border-radius: 4px;
      outline: none;
      cursor: pointer;
    }

    .follow:hover {
      background-color: #fafafa;
    }
  }
}
</style>
