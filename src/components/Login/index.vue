<template>
  <div class="login-container">
    <div class="login-box">
      <div class="top">
        <p>登录博客</p>
      </div>
      <div class="center login-center">
        <div class="email-input">
          <input type="text" placeholder="请输入邮箱/用户名" :class="{error: isEmailError}" v-model="username" @focusout="validate">
          <span>{{emailTip}}</span>
        </div>
        <div class="code-input">
          <input type="password" placeholder="请输入密码" v-model="password">
          <span>{{pwdTip}}</span>
        </div>
        <input type="button" value="登录" @click="login">
      </div>
      <div class="bottom">
        <p>
          未注册用户将自动创建账号
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { login } from "@/api/login"

export default {
  data(){
    return{
      registerOrLogin: true,
      email: '',
      code: '',
      username: '',
      password: '',
      isEmailError: false,
      isPwdError: false
    }
  },
  methods: {
    login(){
      let data = {
        username: this.username,
        password: this.password
      }
      login(data).then(res => {
        console.log(res)
      })
    },
    validate(){
      if(this.username == ''){
        console.log('请输入邮箱或用户名')
      }
    },
  },
  computed: {
    emailTip(){
      return this.isEmailError ? '请输入邮箱或用户名' : ''
    },
    pwdTip(){
      return this.isPwdError ? '请输入密码' : ''
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import "src/assets/css/common";
.login-container{
  width: 100%;
  height: 100%;
  background: url("../../assets/img/loginBg.jpg") no-repeat;
  background-size: cover;
  position: fixed;
  top: 0;
  left: 0;
  .login-box{
    width: 350px;
    background-color: #fff;
    opacity: 0.9;
    padding: 25px;
    box-sizing: border-box;
    border-radius: 4px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1.15);
    .top{
      width: 100%;
      display: flex;
      justify-content: center;
      font-size: 20px;
      font-weight: bold;
      letter-spacing: 1px;
      p{
        width: 150px;
        text-align: center;
      }
    }
    .center{
      width: 100%;
      margin-top: 20px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      div{
        width: 100%;
        margin-bottom: 25px;
        position: relative;
        span{
          position: absolute;
          top: 38px;
          left: 0;
          font-size: 12px;
          color: #ed4014;
        }
      }
      input{
        width: 100%;
        height: 35px;
        padding: 8px 10px;
        box-sizing: border-box;
      }
      input[type='button']{
        border: none;
        color: #fff;
        font-size: 16px;
        letter-spacing: 1px;
        background-color: #1e90ff;
        cursor: pointer;
        transition: background-color .3s;
      }
      input[type='button']:hover{
        background-color: #2d8cf0;
      }
    }
    .bottom{
      margin-top: 15px;
      text-align: center;
      font-size: 14px;
      color: #666;
    }
  }
}
@media screen and (max-width: 900px){
  .login-container{
    background: url("../../assets/img/loginBg2.jpg") no-repeat;
    background-size: cover;
    position: fixed;
    top: 0;
    left: 0;
  }
}
</style>
