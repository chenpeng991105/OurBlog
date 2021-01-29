<template>
  <div class="box">
    <p class="title">🎖️作者榜</p>
    <ul class="authors">
      <li>
        <a href="/user">
          <div class="avatar">
            <img src="@/assets/img/user.jpg" alt="">
          </div>
          <div class="user-info">
            <p class="username">陈宇宇</p>
            <p class="desc">我铺娘一</p>
          </div>
        </a>
      </li>
      <li>
        <a href="">
          <div class="avatar">
            <img src="@/assets/img/user.jpg" alt="">
          </div>
          <div class="user-info">
            <p class="username">陈宇宇</p>
            <p class="desc">我铺娘一</p>
          </div>
        </a>
      </li>
      <li>
        <a href="">
          <div class="avatar">
            <img src="@/assets/img/user.jpg" alt="">
          </div>
          <div class="user-info">
            <p class="username">陈宇宇</p>
            <p class="desc">我铺娘一</p>
          </div>
        </a>
      </li>
    </ul>
    <a href="" class="allAuthors">
      完整榜单 >
    </a>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import "src/assets/css/box";
.authors{
  border-bottom: 1px solid hsla(0,0%,59.2%,.1);
  li{
    padding: 10px 15px;
    background-color: #fff;
    a{
      display: flex;
      align-items: center;

    }
    .avatar img{
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
    .user-info{
      width: 100%;
      margin-left: 10px;
      p{
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      p.desc{
        font-size: 12px;
        color: #909090;
      }
    }
  }
  li:hover{
    background-color: #FBFBFB;
  }
}
.allAuthors{
  display: block;
  width: 100%;
  padding: 15px 20px;
  box-sizing: border-box;
  text-align: center;
  font-size: 16px;
  color: #2d8cf0;
}
</style>
