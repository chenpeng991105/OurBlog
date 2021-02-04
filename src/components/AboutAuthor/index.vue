<template>
  <div class="box">
    <p class="title">关于作者</p>
    <a href="/user" class="user">
      <div class="avatar">
        <img alt="" src="@/assets/img/user.jpg">
      </div>
      <div class="user-info">
        <p class="username">陈鹏</p>
        <p class="desc" title="前端搬砖攻城狮">前端搬砖攻城狮</p>
      </div>
    </a>
    <div class="blog-info">
      <div class="item">
        <p>123</p>
        <span>关注</span>
      </div>
      <span class="line"></span>
      <div class="item">
        <p>6</p>
        <span>关注者</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import "src/assets/css/box";
.user {
  width: 100%;
  padding: 10px 15px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  border-bottom: 1px solid hsla(0, 0%, 59.2%, .1);

  .avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;

    img {
      width: inherit;
      height: inherit;
      border-radius: 50%;
    }
  }

  .user-info {
    width: 100%;
    margin-left: 8px;

    p {
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .username {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 10px;
      color: #213135;
    }

    .desc {
      font-size: 16px;
      color: #909090;
    }
  }
}


.blog-info {
  width: 100%;
  margin: 5px auto 0;
  padding-top: 5px;
  padding-bottom: 15px;
  display: flex;
  justify-content: center;
  align-items: center;

  .line {
    display: inline-block;
    width: 2px;
    height: 30px;
    background-color: #909090;
  }

  .item {
    width: 40%;
    text-align: center;

    p {
      margin-bottom: 2px;
    }
  }

  .item:last-of-type {
    border-right: none;
  }
}
</style>
