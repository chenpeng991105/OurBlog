<template>
  <div class="login-container">
    <div class="login-box">
      <div class="top">
        <p>OurBlog</p>
      </div>
      <div class="center">
        <el-form :model="loginForm" ref="loginForm" :rules="loginFormRules" status-icon>
          <el-form-item prop="username">
            <el-input type="text" v-model="loginForm.username" placeholder="请输入用户名" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" v-model="loginForm.password" placeholder="请输入密码" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item style="text-align: center;width: 100%">
            <el-button type="primary" size="medium" @click="login" style="width: 100%">登录</el-button>
          </el-form-item>
        </el-form>
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
      loginForm: {
        username: 'user',
        password: '123456',
      },
      loginFormRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          {
            min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur',
          },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          {
            min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur',
          },
        ],
      }
    }
  },
  methods: {
    login(){
      let {username, password} = this.loginForm
      this.$refs.loginForm.validate(valid => {
        console.log(valid)
        if (valid) {
          this.$router.replace('/')
        } else {
          return false
        }
      })
    },
  },
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
@font-face {
  font-family: tttgbnumber;
  src: url("../../assets/fonts/tttgbnumber.eot") format("embedded-opentype"),
  url('../../assets/fonts/tttgbnumber.ttf') format("truetype"),
  url('../../assets/fonts/tttgbnumber.woff') format("woff");
}
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
    opacity: 0.95;
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
      font-size: 25px;
      font-weight: bold;
      letter-spacing: 1px;
      p{
        width: 150px;
        text-align: center;
        font-family: tttgbnumber,serif;
        color: #2d8cf0;
      }
    }
    .center{
      margin-top: 20px;
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
