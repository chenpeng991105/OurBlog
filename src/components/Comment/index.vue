<template>
  <div id="comment">
    <div class="input-wrap">
      <img src="@/assets/img/user.jpg" alt="">
      <textarea placeholder="请输入评论..." ref="commentText">

      </textarea>
      <div class="action-container" ref="actionContainer">
        <div class="action-inner">
          <div class="emoji" @click.stop="showEmojiContainer">
            <i class="iconfont icon-smile"></i>
            表情
          </div>
          <div class="emoji-container" ref="emojiContainer">
            <div class="single"></div>
            <ul class="emoji-box" @click.stop="">
              <li class="emoji">😂</li>
              <li class="emoji">😂</li>
              <li class="emoji">😂</li>
              <li class="emoji">😂</li>
              <li class="emoji">😂</li>
              <li class="emoji">😂</li>
              <li class="emoji">😂</li>
              <li class="emoji">😂</li>
              <li class="emoji">😂</li>

              <li class="emoji">😂</li>
              <li class="emoji">😂</li>
              <li class="emoji">😂</li>
              <li class="emoji">😂</li>
              <li class="emoji">😂</li>
              <li class="emoji">😂</li>
              <li class="emoji">😂</li>
              <li class="emoji">😂</li>
              <li class="emoji">😂</li>

              <li class="emoji">😂</li>
              <li class="emoji">😂</li>
              <li class="emoji">😂</li>
              <li class="emoji">😂</li>
              <li class="emoji">😂</li>
              <li class="emoji">😂</li>
              <li class="emoji">😂</li>
              <li class="emoji">😂</li>
              <li class="emoji">😂</li>

              <li class="emoji">😂</li>
              <li class="emoji">😂</li>
              <li class="emoji">😂</li>
              <li class="emoji">😂</li>
              <li class="emoji">😂</li>
              <li class="emoji">😂</li>
              <li class="emoji">😂</li>
              <li class="emoji">😂</li>
              <li class="emoji">😂</li>

              <li class="emoji">😂</li>
              <li class="emoji">😂</li>
              <li class="emoji">😂</li>
              <li class="emoji">😂</li>
              <li class="emoji">😂</li>
              <li class="emoji">😂</li>
              <li class="emoji">😂</li>
              <li class="emoji">😂</li>
              <li class="emoji">😂</li>

              <li class="emoji">😂</li>
              <li class="emoji">😂</li>
              <li class="emoji">😂</li>
              <li class="emoji">😂</li>
              <li class="emoji">😂</li>
              <li class="emoji">😂</li>
              <li class="emoji">😂</li>
              <li class="emoji">😂</li>
              <li class="emoji">😂</li>
            </ul>
          </div>
          <button class="btn">
            评论
          </button>
        </div>
      </div>
    </div>
    <div class="comment-wrap">
      <ul>
        <li class="item">
          <div class="user">
            <img src="@/assets/img/user.jpg" alt="">
          </div>
          <div class="content">
            <div class="user-info">
              <span class="username">chenyuyu</span>
              <span class="desc">Java攻城狮</span>
            </div>
            <div class="comment-info">
              <p class="comment-content">我铺娘一</p>
              <span class="comment-time">2020/10/24</span>
              <button class="comment-reply" @click="replyComment($event)">
                <i class="iconfont icon-huifu"></i>
                回复
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const emojiContainer = this.$refs.emojiContainer
    document.addEventListener('click', function (){
      emojiContainer.style.display = 'none'
    })
  },
  data(){
    return{

    }
  },
  methods: {
    showEmojiContainer(){
      this.$refs.emojiContainer.style.display = 'block'
      this.$refs.commentText.focus()
    },
    replyComment(e){
      let inputWrap = '<div class="input-wrap">\n' +
          '              <textarea placeholder="请输入评论..." ref="commentText"></textarea>\n' +
          '              <div class="action-container" ref="actionContainer">\n' +
          '                <div class="action-inner">\n' +
          '                  <div class="emoji" @click.stop="showEmojiContainer">\n' +
          '                    <i class="iconfont icon-smile"></i>\n' +
          '                    表情\n' +
          '                  </div>\n' +
          '                  <div class="emoji-container" ref="emojiContainer">\n' +
          '                    <div class="single"></div>\n' +
          '                    <ul class="emoji-box" @click.stop="">\n' +
          '                      <li class="emoji" >\n' +
          '                        <img src="@/assets/img/1.svg" alt="">\n' +
          '                      </li>\n' +
          '                      <li class="emoji">\n' +
          '                        <img src="@/assets/img/2.svg" alt="">\n' +
          '                      </li>\n' +
          '                      <li class="emoji">\n' +
          '                        <img src="@/assets/img/3.svg" alt="">\n' +
          '                      </li>\n' +
          '                      <li class="emoji">\n' +
          '                        <img src="@/assets/img/4.svg" alt="">\n' +
          '                      </li>\n' +
          '                      <li class="emoji">\n' +
          '                        <img src="@/assets/img/5.svg" alt="">\n' +
          '                      </li>\n' +
          '                      <li class="emoji">\n' +
          '                        <img src="@/assets/img/2.svg" alt="">\n' +
          '                      </li>\n' +
          '                      <li class="emoji">\n' +
          '                        <img src="@/assets/img/3.svg" alt="">\n' +
          '                      </li>\n' +
          '                      <li class="emoji">\n' +
          '                        <img src="@/assets/img/4.svg" alt="">\n' +
          '                      </li>\n' +
          '                      <li class="emoji">\n' +
          '                        <img src="@/assets/img/5.svg" alt="">\n' +
          '                      </li>\n' +
          '\n' +
          '                      <li class="emoji" >\n' +
          '                        <img src="@/assets/img/1.svg" alt="">\n' +
          '                      </li>\n' +
          '                      <li class="emoji">\n' +
          '                        <img src="@/assets/img/2.svg" alt="">\n' +
          '                      </li>\n' +
          '                      <li class="emoji">\n' +
          '                        <img src="@/assets/img/3.svg" alt="">\n' +
          '                      </li>\n' +
          '                      <li class="emoji">\n' +
          '                        <img src="@/assets/img/4.svg" alt="">\n' +
          '                      </li>\n' +
          '                      <li class="emoji">\n' +
          '                        <img src="@/assets/img/5.svg" alt="">\n' +
          '                      </li>\n' +
          '                      <li class="emoji">\n' +
          '                        <img src="@/assets/img/2.svg" alt="">\n' +
          '                      </li>\n' +
          '                      <li class="emoji">\n' +
          '                        <img src="@/assets/img/3.svg" alt="">\n' +
          '                      </li>\n' +
          '                      <li class="emoji">\n' +
          '                        <img src="@/assets/img/4.svg" alt="">\n' +
          '                      </li>\n' +
          '                      <li class="emoji">\n' +
          '                        <img src="@/assets/img/5.svg" alt="">\n' +
          '                      </li>\n' +
          '\n' +
          '                      <li class="emoji" >\n' +
          '                        <img src="@/assets/img/1.svg" alt="">\n' +
          '                      </li>\n' +
          '                      <li class="emoji">\n' +
          '                        <img src="@/assets/img/2.svg" alt="">\n' +
          '                      </li>\n' +
          '                      <li class="emoji">\n' +
          '                        <img src="@/assets/img/3.svg" alt="">\n' +
          '                      </li>\n' +
          '                      <li class="emoji">\n' +
          '                        <img src="@/assets/img/4.svg" alt="">\n' +
          '                      </li>\n' +
          '                      <li class="emoji">\n' +
          '                        <img src="@/assets/img/5.svg" alt="">\n' +
          '                      </li>\n' +
          '                      <li class="emoji">\n' +
          '                        <img src="@/assets/img/2.svg" alt="">\n' +
          '                      </li>\n' +
          '                      <li class="emoji">\n' +
          '                        <img src="@/assets/img/3.svg" alt="">\n' +
          '                      </li>\n' +
          '                      <li class="emoji">\n' +
          '                        <img src="@/assets/img/4.svg" alt="">\n' +
          '                      </li>\n' +
          '                      <li class="emoji">\n' +
          '                        <img src="@/assets/img/5.svg" alt="">\n' +
          '                      </li>\n' +
          '\n' +
          '                      <li class="emoji" >\n' +
          '                        <img src="@/assets/img/1.svg" alt="">\n' +
          '                      </li>\n' +
          '                      <li class="emoji">\n' +
          '                        <img src="@/assets/img/2.svg" alt="">\n' +
          '                      </li>\n' +
          '                      <li class="emoji">\n' +
          '                        <img src="@/assets/img/3.svg" alt="">\n' +
          '                      </li>\n' +
          '                      <li class="emoji">\n' +
          '                        <img src="@/assets/img/4.svg" alt="">\n' +
          '                      </li>\n' +
          '                      <li class="emoji">\n' +
          '                        <img src="@/assets/img/5.svg" alt="">\n' +
          '                      </li>\n' +
          '                      <li class="emoji">\n' +
          '                        <img src="@/assets/img/2.svg" alt="">\n' +
          '                      </li>\n' +
          '                      <li class="emoji">\n' +
          '                        <img src="@/assets/img/3.svg" alt="">\n' +
          '                      </li>\n' +
          '                      <li class="emoji">\n' +
          '                        <img src="@/assets/img/4.svg" alt="">\n' +
          '                      </li>\n' +
          '                      <li class="emoji">\n' +
          '                        <img src="@/assets/img/5.svg" alt="">\n' +
          '                      </li>\n' +
          '\n' +
          '                      <li class="emoji" >\n' +
          '                        <img src="@/assets/img/1.svg" alt="">\n' +
          '                      </li>\n' +
          '                      <li class="emoji">\n' +
          '                        <img src="@/assets/img/2.svg" alt="">\n' +
          '                      </li>\n' +
          '                      <li class="emoji">\n' +
          '                        <img src="@/assets/img/3.svg" alt="">\n' +
          '                      </li>\n' +
          '                      <li class="emoji">\n' +
          '                        <img src="@/assets/img/4.svg" alt="">\n' +
          '                      </li>\n' +
          '                      <li class="emoji">\n' +
          '                        <img src="@/assets/img/5.svg" alt="">\n' +
          '                      </li>\n' +
          '                      <li class="emoji">\n' +
          '                        <img src="@/assets/img/2.svg" alt="">\n' +
          '                      </li>\n' +
          '                      <li class="emoji">\n' +
          '                        <img src="@/assets/img/3.svg" alt="">\n' +
          '                      </li>\n' +
          '                      <li class="emoji">\n' +
          '                        <img src="@/assets/img/4.svg" alt="">\n' +
          '                      </li>\n' +
          '                      <li class="emoji">\n' +
          '                        <img src="@/assets/img/5.svg" alt="">\n' +
          '                      </li>\n' +
          '\n' +
          '                      <li class="emoji" >\n' +
          '                        <img src="@/assets/img/1.svg" alt="">\n' +
          '                      </li>\n' +
          '                      <li class="emoji">\n' +
          '                        <img src="@/assets/img/2.svg" alt="">\n' +
          '                      </li>\n' +
          '                      <li class="emoji">\n' +
          '                        <img src="@/assets/img/3.svg" alt="">\n' +
          '                      </li>\n' +
          '                      <li class="emoji">\n' +
          '                        <img src="@/assets/img/4.svg" alt="">\n' +
          '                      </li>\n' +
          '                      <li class="emoji">\n' +
          '                        <img src="@/assets/img/5.svg" alt="">\n' +
          '                      </li>\n' +
          '                      <li class="emoji">\n' +
          '                        <img src="@/assets/img/2.svg" alt="">\n' +
          '                      </li>\n' +
          '                      <li class="emoji">\n' +
          '                        <img src="@/assets/img/3.svg" alt="">\n' +
          '                      </li>\n' +
          '                      <li class="emoji">\n' +
          '                        <img src="@/assets/img/4.svg" alt="">\n' +
          '                      </li>\n' +
          '                      <li class="emoji">\n' +
          '                        <img src="@/assets/img/5.svg" alt="">\n' +
          '                      </li>\n' +
          '                    </ul>\n' +
          '                  </div>\n' +
          '                  <button class="btn">\n' +
          '                    评论\n' +
          '                  </button>\n' +
          '                </div>\n' +
          '              </div>\n' +
          '            </div>'
      console.log(e.target.parentNode.parentNode.parentNode)
      const li = e.target.parentNode.parentNode
      li.insertAdjacentHTML('beforeend', inputWrap)
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
#comment{
  width: 100%;
  margin-bottom: 20px;
  padding: 0 28px;
  box-sizing: border-box;
  border-radius: 2px;
  background-color: #fff;
}
/deep/ .input-wrap{
  width: 100%;
  padding: 10px 12px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  background-color: #f5f5f5;
  border-radius: 3px;
  img{
    width: 35px;
    height: 35px;
    border-radius: 50%;
  }
  textarea{
    width: 100%;
    height: 60px;
    flex: 1;
    margin-left: 5px;
    padding: 6px 10px;
    font-family: sans-serif;
    box-sizing: border-box;
    background-color: #fff;
    border: 1px solid #f1f1f1;
    border-radius: 3px;
    resize: none;
    outline: none;
  }
  textarea:focus{
    border-color: #2d8cf0;
  }
  .action-container{
    width: 100%;
    margin-top: 10px;
    padding-left: 40px;
    box-sizing: border-box;
    .action-inner{
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
    }
    .emoji{
      cursor: pointer;
      color: #1e90ff;
    }

    .btn{
      width: 80px;
      height: 35px;
      line-height: 35px;
      outline: none;
      border: none;
      color: #fff;
      border-radius: 3px;
      background-color: #1e90ff;
      cursor: pointer;
    }
    .emoji-container{
      position: absolute;
      top: 42px;
      display: none;
      .single{
        width: 0;
        height: 0;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-bottom: 16px solid #fff;
        position: absolute;
        top: -11px;
        left: 20px;
      }
    }
    .emoji-box{
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      width: 310px;
      height: 236px;
      padding: 10px 12px;
      border-radius: 3px;
      background-color: #fff;
      box-shadow: 0 5px 18px 0 rgba(0,0,0,.16);
      .emoji{
        width: 24px;
        height: 24px;
        padding: 5px;
        cursor: pointer;
        font-size: 20px;
        display: flex;
        align-items: center;
        transform: scale(1);
      }
      .emoji:hover{
        transform: scale(1.2);
      }
    }
  }
}
.comment-wrap{
  width: 100%;
  padding: 10px 0 10px 40px;
  box-sizing: border-box;
  .item{
    width: 100%;
    margin-top: 12px;
    display: flex;
    flex-wrap: wrap;
  }
  .user{
    img{
      width: 45px;
      height: 45px;
      border-radius: 50%;
    }
  }
  .content{
    width: 100%;
    flex: 1;
    margin-left: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
    .user-info{
      .desc{
        margin-left: 8px;
        color: #8a9aa9;
      }
    }
    .comment-info{
      margin: 10px 0;
      .comment-content{
        margin-bottom: 10px;
      }
      .comment-time{
        font-weight: 400;
        color: #8a9aa9;
      }
      .comment-reply{
        float: right;
        border: none;
        outline: none;
        background-color: transparent;
        color: #8a9aa9;
        font-size: 16px;
        cursor: pointer;
      }
    }
    .input-wrap{
      .action-container{
        padding-left: 4px;
      }
    }
  }
}
</style>
