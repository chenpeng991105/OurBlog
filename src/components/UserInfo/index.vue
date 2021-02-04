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
      </div>
      <el-button plain @click="$router.push('/profile')">编辑个人资料</el-button>
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
        .icon-github{
          font-size: 25px;
          color: #000;
        }
      }
    }
  }
}
@media screen and (max-width: 1024px) {
  .user-info{
    display: block;
    text-align: center;
    .info{
      margin-left: 0;
      .username{
        margin-bottom: 10px;
      }
    }
    .meta{
      display: block;
      text-align: center;
      .user-link{
        display: block;
        margin: 10px 0;
      }
    }
  }
}
</style>
