<template>
  <div id="header">
    <div class="mini-header">
      <div class="mini-header-left">
        <div class="logo">
          <a class="name" href="/index">OurBlog</a>
        </div>
        <ul class="mini-header-nav">
          <li>
            <a href="/tag">后端</a>
          </li>
          <li>
            <a href="">前端</a>
          </li>
          <li>
            <a href="">实用工具</a>
          </li>
        </ul>
        <div class="nav-cursor" style="width: 68px;left: 0" ref="navCursor"></div>
      </div>
      <div class="mini-header-right">
        <div class="search-wrap">
          <input type="text" placeholder="搜索文章/标签/用户">
          <i class="iconfont icon-search"></i>
        </div>
        <div class="write">
          <button @click="$router.push('/new')">写文章</button>
        </div>
        <div class="login">
          <a href="/login" class="login-link">登录</a>
        </div>
        <div class="user-info">
          <img src="@/assets/img/user.jpg" alt="头像" @click="showUserBox">
          <ul class="user-box" v-show="userBoxVisible">
            <li @click="$router.push('/new')">
              <i class="iconfont icon-write"></i>
              写文章
            </li>
            <li @click="$router.push('/user')">
              <i class="iconfont icon-user"></i>
              我的主页
            </li>
            <li @click="$router.push('/profile')">
              <i class="iconfont icon-profile"></i>
              个人资料
            </li>
            <li>
              <i class="iconfont icon-logout"></i>
              登出
            </li>
          </ul>
        </div>
        <p class="menu">
          <i class="iconfont icon-menu"></i>
          <i class="iconfont icon-close" style="display: none;font-size: 18px"></i>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const navCursor = this.$refs.navCursor
    const miniHeaderNav = document.querySelector('.mini-header-nav')
    const miniHeaderNavLi = miniHeaderNav.querySelectorAll('li')
    miniHeaderNavLi.forEach(item => {
      item.onmouseover = function () {
        navCursor.style.width = item.offsetWidth + 'px'
        navCursor.style.left = item.offsetLeft + 'px'
      }
    })
    miniHeaderNav.onmouseleave = function () {
      navCursor.style.width = '68px'
      navCursor.style.left = '0'
    }
  },
  props: {

  },
  data() {
    return {
      userBoxVisible: false
    }
  },
  methods: {
    showUserBox() {
      this.userBoxVisible = !this.userBoxVisible
    },
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
@font-face {
  font-family: tttgbnumber;
  src: url("../../assets/fonts/tttgbnumber.eot") format("embedded-opentype"),
  url('../../assets/fonts/tttgbnumber.ttf') format("truetype"),
  url('../../assets/fonts/tttgbnumber.woff') format("woff");
}

#header {
  width: 100%;
  height: 60px;
  background-color: #fff;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
}

.mini-header {
  width: 75%;
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.mini-header-left {
  .logo {
    height: 60px;
    line-height: 60px;
    position: absolute;
    top: 0;
    left: 0;

    .name {
      display: inline-block;
      width: 100%;
      text-align: center;
      font-size: 18px;
      font-family: tttgbnumber, serif;
      font-weight: bold;
      color: #2d8cf0;
    }
  }

  .mini-header-nav {
    height: 60px;
    line-height: 60px;
    margin-left: 125px;

    li {
      float: left;
      margin-right: 70px;
      font-size: 18px;
      color: #71777c;
      transition: color .2s;
    }

    li:hover {
      color: #2d8cf0;
    }
  }

  .nav-cursor {
    height: 3px;
    background-color: #2d8cf0;
    position: absolute;
    bottom: 0;
    transition: left .2s;
  }
}

.mini-header-right {
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;

  p {
    margin-left: 30px;
    color: #71777c;
    cursor: pointer;
    z-index: 10;
    font-size: 18px;
  }

  p.menu {
    display: none;
  }

  p.notice{
    font-size: 20px;
  }

  .search-wrap {
    position: relative;
    input {
      width: 150px;
      height: 23px;
      line-height: 24px;
      padding: 4px 30px 4px 10px;
      font-size: 16px;
      box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
      border-radius: 3px;
      border: 1px solid #71777c;
      outline: none;
      transition: ease-in-out border-color .2s, ease-in-out box-shadow .2s;
    }

    input:focus {
      border-color: #2d8cf0;
      box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 6px rgba(45,140,240, .8);
      +.icon-search{
        color: #2d8cf0;
      }
    }

    .icon-search {
      font-size: 16px;
      position: absolute;
      top: 8px;
      right: 8px;
      cursor: pointer;
      color: #71777c;
      transition: color .2s;
    }
  }
  .write{
    margin-left: 30px;
    button{
      width: 80px;
      height: 33px;
      line-height: 33px;
      text-align: center;
      font-size: 16px;
      color: #fff;
      border-radius: 3px;
      border: none;
      outline: none;
      background-color: #007fff;
      cursor: pointer;
    }
  }
  .login{
    margin-left: 30px;
    cursor: pointer;
    .login-link:hover{
      color: #2d8cf0;
    }
  }
  .user-info{
    margin-left: 30px;
    cursor: pointer;
    position: relative;
    img{
      display: inline-block;
      vertical-align: middle;
      width: 35px;
    }
    .user-box{
      position: absolute;
      top: 47px;
      right: 0;
      width: 150px;
      padding: 10px 0;
      color: #909090;
      background-color: #fff;
      border: 1px solid #ddd;
      border-radius: 2px;
      box-shadow: 0 1px 2px #f1f1f1;
      z-index: 10;
      li{
        height: 35px;
        line-height: 35px;
        padding-left: 15px;
        background-color: #fff;
        &:hover{
          background-color: #f8f8f8;
        }
        .iconfont{
          margin-right: 3px;
        }
      }
    }
  }
}

@media screen and (max-width: 900px) {
  #header {
    height: 55px;
  }

  .mini-header {
    width: 100%;
    position: relative;
  }

  .mini-header-left {
    .logo {
      height: 55px;
      line-height: 55px;
      margin-left: 10px;
    }

    .mini-header-nav {
      width: 100%;
      height: 200px;
      overflow: hidden;
      margin: 0 auto;
      background-color: rgba(112, 161, 255, .9);
      position: absolute;
      top: 55px;
      left: 0;
      display: none;
      z-index: 10;

      li {
        display: block;
        width: 100%;
        height: 50px;
        line-height: 50px;
        margin: 0 auto;
        color: #fff;
        text-align: center;
        float: none;
      }
    }

    @keyframes top-show {
      0% {
        height: 0;
      }
      100% {
        height: 200px;
      }
    }

    @keyframes bottom-hidden {
      0% {
        height: 200px;
      }
      100% {
        height: 0;
      }
    }

    .nav-cursor {
      display: none;
    }
  }

  .mini-header-right {
    margin-right: 10px;

    .search-wrap {
      display: none;
    }

    p.menu {
      display: block;
    }

    .write{
      display: none;
    }
  }
}

@media screen and (min-width: 900px) and (max-width: 1024px) {
  .mini-header {
    width: 95%;
  }
}

@media screen and (min-width: 1024px) and (max-width: 1200px) {
  .mini-header {
    width: 85%;
  }
}
</style>
