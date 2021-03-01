<template>
  <div class="user-info" v-if="user">
    <div class="avatar">
      <img :src="'https://yudachi.oss-cn-shenzhen.aliyuncs.com/'+user.pic" alt="">
    </div>
    <div class="info">
      <p class="username">{{user.username}}</p>
      <p class="desc">大厂小分队</p>
    </div>
    <div class="meta">
      <div class="user-link">
        <a :href="user.github" target="_blank" class="link">
          <i class="iconfont icon-github"></i>
        </a>
      </div>
      <el-button v-if="user.id" plain @click="$router.push(`/profile/${user.id}`)">编辑个人资料</el-button>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    user: Object
  }
}
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
