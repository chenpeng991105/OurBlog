<template>
  <div class="edit-profile">
    <div class="profile-box">
      <h1>个人资料</h1>
      <ul class="edit-list">
        <li class="item">
          <span>头像</span>
          <div class="avatar-upload">
            <input
                type="file"
                hidden ref="file"
                @change="avatarChange($event)"
                accept="image/jpeg, image/png, image/gif">
            <img :src="'https://yudachi.oss-cn-shenzhen.aliyuncs.com/'+user.pic" alt="用户头像" class="avatar-preview" ref="preview">
            <el-button type="primary" size="medium" @click="uploadAvatar">点击上传</el-button>
          </div>
        </li>
        <li class="item">
          <span>用户名</span>
          <div class="input-box">
            <input type="text" class="input" placeholder="填写你的用户名" ref="username" v-model="user.username">
            <div class="action">
              <el-button type="text" v-if="!isEditUsername" @click="editUsername">修改</el-button>
              <el-button type="text" v-if="isEditUsername" @click="saveUsername">保存</el-button>
              <el-button type="text" v-if="isEditUsername" @click="cancel('username')">取消</el-button>
            </div>
          </div>
        </li>
        <li class="item">
          <span>密码</span>
          <div class="input-box">
            <input type="password" class="input" placeholder="填写你的密码" ref="password" v-model="user.password">
            <div class="action">
              <el-button type="text" v-if="!isEditPassword" @click="editPassword">修改</el-button>
              <el-button type="text" v-if="isEditPassword" @click="savePassword">保存</el-button>
              <el-button type="text" v-if="isEditPassword" @click="cancel('password')">取消</el-button>
            </div>
          </div>
        </li>
        <li class="item">
          <span>
            <i class="iconfont icon-github" style="font-size: 20px"></i>
          </span>
          <div class="input-box">
            <input type="text" class="input" placeholder="填写你的github链接" ref="githubUrl" v-model="user.github">
            <div class="action">
              <el-button type="text" v-if="!isEditGithubUrl" @click="editGithubUrl">修改</el-button>
              <el-button type="text" v-if="isEditGithubUrl" @click="saveGithubUrl">保存</el-button>
              <el-button type="text" v-if="isEditGithubUrl" @click="cancel('githubUrl')">取消</el-button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {findUser, updateUser} from "@/api/user";

export default {
  data() {
    return {
      user: {},
      isEditUsername: false,
      isEditPassword: false,
      isEditGithubUrl: false,
      uId: '',
      username: '',
      password: '',
      github: '',
    }
  },
  created() {
    this.uId = this.$route.params.id
    findUser({uId: this.uId}).then(res => {
      if (res.code == 10001) {
        console.log(res.data)
        if (!res.data.github) {
          res.data.github = 'https://www.github.com'
        }
        this.user = res.data
      }
    })
  },
  methods: {
    uploadAvatar() {
      this.$refs.file.click()
    },
    avatarChange(e) {
      this.$refs.preview.src = URL.createObjectURL(e.target.files[0])
    },
    editUsername() {
      this.username = this.user.username
      this.isEditUsername = true
      this.$refs.username.select()
    },
    saveUsername() {
      updateUser({id: Number(this.uId), username: this.user.username}).then(res => {
        console.log(res)
      })
    },
    editPassword() {
      this.password = this.user.password
      this.isEditPassword = true
      this.$refs.password.select()
    },
    savePassword() {
      updateUser({id: Number(this.uId), username: this.user.password}).then(res => {
        console.log(res)
      })
    },
    editGithubUrl() {
      this.github = this.user.github
      this.isEditGithubUrl = true
      this.$refs.githubUrl.select()
    },
    saveGithubUrl() {
      updateUser({id: Number(this.uId), username: this.user.github}).then(res => {
        console.log(res)
      })
    },
    cancel(type) {
      switch (type) {
        case 'username':
          this.user.username = this.username
          this.isEditUsername = false
          break
        case 'password':
          this.user.password = this.password
          this.isEditPassword = false
          break
        case 'githubUrl':
          this.user.github = this.github
          this.isEditGithubUrl = false
          break
      }
    },
  }
}
</script>

<style lang="less" scoped>
.edit-profile {
  padding: 27px 40px 60px;
  background-color: #fff;
}

.profile-box {
  h1 {
    margin: 15px 0;
    font-size: 25px;
    color: #333;
  }
}

.edit-list {
  .item {
    display: flex;
    align-items: center;
    padding: 20px 0;
    border-top: 1px solid #f1f1f1;

    &:last-of-type {
      border-bottom: 1px solid #f1f1f1;
    }

    span {
      width: 150px;
      font-size: 14px;
      color: #333;
    }

    .avatar-upload {
      display: flex;
      align-items: center;

      .avatar-preview {
        flex: 0 0 auto;
        width: 80px;
        height: 80px;
        margin-right: 20px;
        object-fit: cover;
      }
    }

    .input-box {
      display: flex;
      flex: 1;
      .input {
        flex: 1;
        color: #909090;
        border: none;
        outline: none;
        font-size: 16px;
      }
      .action{
        display: flex;
        width: 70px;
        justify-content: flex-end;
      }
    }
  }
}

@media screen and (max-width: 1024px) {
  .edit-list {
    .item {
      display: block;
      span{
        display: block;
        margin-bottom: 10px;
      }
      .avatar-upload{
        justify-content: space-between;
      }
      .input-box{
        justify-content: space-between;
        flex: none;
        .input{
          flex: none;
        }
      }
    }
  }
}
</style>
