<template>
  <div class="new-article">
    <div class="header">
      <div class="left">
        <input type="text" placeholder="请输入文章标题..." class="title">
      </div>
      <div class="right">
        <div @click="imgBoxVisible = true" v-click-outside="hideImgBox">
          <i class="iconfont icon-img" :style="{color: imgFile !=='' ? '#007fff' : '#909090'}"></i>
          <div class="img-box" v-show="imgBoxVisible">
            <div class="title">添加封面大图</div>
            <div class="default" v-show="!imgFile" @click="addBigImg">点击此处添加图片</div>
            <input type="file" hidden ref="file" @change="imgChange($event)">
            <div class="img-con" v-if="imgFile">
              <img src="" alt="封面大图" ref="image" class="img">
              <div class="delete-img" title="删除这张图片" @click.stop="deleteImg">
                <i class="iconfont icon-delete"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="publish" @click.self="visible = !visible" v-click-outside="hidePublishBox" ref="publish">
          发布
          <div class="publish-box" v-show="visible" ref="publishBox">
            <div class="title">发布文章</div>
            <div class="category-box">
              <div class="sub-title">选择分类</div>
              <div class="category-list">
                <el-tag
                    v-for="(item, index) in cates"
                    :key="index"
                    class="mr10 mt10"
                    type="info"
                    size="medium"
                    style="cursor: pointer"
                    @click="selectTag($event, item)">
                  {{ item }}
                </el-tag>
              </div>
            </div>
            <div class="tag-box">
              <div class="sub-title">添加标签</div>
              <div class="tag-list">
                <el-tag
                    v-for="(item, index) in tags"
                    :key="index"
                    class="mr10 mt10"
                    closable
                    size="medium"
                    @close="deleteTag(index)">
                  {{ item }}
                </el-tag>
                <el-input
                    v-show="tagInputVisible"
                    v-model="tagInputValue"
                    ref="tagInput"
                    style="max-width: 100px"
                    class="mr10 mt10"
                    @keyup.enter.native="handleTagInputConfirm"
                    @blur="handleTagInputConfirm"
                    size="small"/>
                <el-button
                    v-show="!tagInputVisible"
                    size="small"
                    class="mr10 mt10"
                    @click="showTagInput">
                  New Tag
                </el-button>
              </div>
            </div>
            <div class="publish-btn">
              <el-button type="primary" size="medium" @click="publish">确认并发布</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <mavon-editor
        ref="md"
        placeholder="Write something here..."
        :boxShadow="false"
        class="mavon-editor"
        v-model="content"
        :toolbars="toolbars"
        fontSize="16px"
        @imgAdd="imgAdd"
        @imgDel="imgDel"
    />
  </div>
</template>

<script>
import marked from 'marked'
export default {
  data() {
    return {
      content: "",
      toolbars: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        strikethrough: true, // 中划线
        mark: true, // 标记
        superscript: true, // 上角标
        subscript: true, // 下角标
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        code: true, // code
        table: true, // 表格
        fullscreen: true, // 全屏编辑
        readmodel: true, // 沉浸式阅读
        htmlcode: true, // 展示html源码
        help: true, // 帮助
        /* 1.3.5 */
        undo: true, // 上一步
        redo: true, // 下一步
        trash: true, // 清空
        save: false, // 保存（触发events中的save事件）
        /* 1.4.2 */
        navigation: true, // 导航目录
        /* 2.1.8 */
        alignleft: true, // 左对齐
        aligncenter: true, // 居中
        alignright: true, // 右对齐
        /* 2.2.1 */
        subfield: true, // 单双栏模式
        preview: true // 预览
      },
      visible: false,
      tagInputVisible: false,
      tagInputValue: '',
      tags: [],
      cateInputVisible: false,
      cateInputValue: '',
      cates: ['前端', '后端', '大数据', '人工智能'],
      selectCate: '',
      event: {},
      imgFile: '',
      imgBoxVisible: false,
    };
  },
  methods: {
    // 上传图片方法
    imgAdd(pos, $file) {
      console.log(pos, $file);
      const formData = new FormData()
      formData.append('file', $file)
      this.$axios.post('http://99ib29.natappfree.cc/article/upload', formData).then(res => {
        this.$refs.md.$imglst2Url([[pos, 'https://yudachi.oss-cn-shenzhen.aliyuncs.com/'+res.data.data]])
      })
      // console.log(this.$refs.md)
    },
    imgDel(pos) {
      console.log(pos)
    },
    showTagInput() {
      this.tagInputVisible = true
      this.$nextTick(() => {
        this.$refs.tagInput.$refs.input.focus();
      })
    },
    handleTagInputConfirm() {
      if (this.tagInputValue.trim()) {
        this.tags.push(this.tagInputValue.trim())
      }
      this.tagInputVisible = false
      this.tagInputValue = ''
    },
    deleteTag(index) {
      this.tags.splice(index, 1)
    },

    hidePublishBox() {
      this.visible = false
    },

    hideImgBox() {
      this.imgBoxVisible = false
    },
    selectTag(event, cate) {
      const self = event.target
      const children = self.parentNode.children
      children.forEach(c => {
        c.classList.add('el-tag--info')
      })
      self.classList.remove('el-tag--info')
      this.selectCate = cate
    },
    publish() {
      console.log(marked(this.content))
    },
    addBigImg() {
      this.$refs.file.click()
    },
    imgChange(e) {
      this.imgFile = e.target.files[0]
      console.log(this.imgFile)
      this.$nextTick(() => {
        this.$refs.image.src = URL.createObjectURL(this.imgFile)
      })
    },
    deleteImg() {
      this.imgFile = ''
      this.$refs.file.value = ''
    },
  }
};
</script>
<style lang="less" scoped>
.new-article {
  overflow-x: hidden;
}

.header {
  width: 100%;
  height: 60px;
  line-height: 60px;
  padding: 0 20px;
  box-sizing: border-box;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
}

.left {
  flex: 1;
  margin-right: 20px;

  .title {
    width: 100%;
    border: none;
    outline: none;
    font-size: 22px;
    letter-spacing: 1px;
    font-weight: 700;
    vertical-align: middle;

    &:focus {
      border-color: transparent;
      box-shadow: none;
    }
  }
}

.right {
  display: flex;
  position: relative;

  .icon-img {
    font-size: 20px;
    margin-right: 30px;
    cursor: pointer;
    position: relative;
  }

  .img-box {
    position: absolute;
    top: 60px;
    right: 20px;
    z-index: 10;
    width: 250px;
    line-height: 1;
    padding: 20px;
    color: #909090;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 2px;
    box-shadow: 0 1px 2px #f1f1f1;

    &::before {
      content: '';
      display: block;
      width: 10px;
      height: 10px;
      position: absolute;
      top: -7px;
      right: 45px;
      background-color: #fff;
      border: 1px solid #ddd;
      border-right: none;
      border-bottom: none;
      transform: rotate(45deg);
    }

    .default {
      width: 100%;
      height: 100px;
      line-height: 100px;
      text-align: center;
      color: rgba(51, 51, 51, .4);
      background-color: hsla(0, 0%, 87.1%, .6);
      cursor: pointer;
      user-select: none;
    }

    .img-con {
      width: 100%;
      position: relative;

      &:hover {
        .delete-img {
          display: block;
        }
      }

      .img {
        width: 100%;
        user-select: none;
      }

      .delete-img {
        position: absolute;
        top: 0;
        right: 0;
        color: #333;
        width: 30px;
        height: 30px;
        border-radius: 0 0 0 30px;
        background-color: rgba(0, 0, 0, .6);
        cursor: pointer;
        display: none;

        .icon-delete {
          position: absolute;
          color: #fafafa;
          top: 5px;
          left: 10px;
        }
      }
    }

  }

  .publish {
    color: #007fff;
    cursor: pointer;
    user-select: none;
  }

  .publish-box {
    position: absolute;
    top: 60px;
    right: 0;
    width: 280px;
    line-height: 1;
    padding: 20px;
    color: #909090;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 2px;
    box-shadow: 0 1px 2px #f1f1f1;
    cursor: default;
    z-index: 10;

    &::before {
      content: '';
      display: block;
      width: 10px;
      height: 10px;
      position: absolute;
      top: -7px;
      right: 12px;
      background-color: #fff;
      border: 1px solid #ddd;
      border-right: none;
      border-bottom: none;
      transform: rotate(45deg);
    }

    .category-box, .tag-box {
      margin-bottom: 15px;
    }

    .sub-title {
      margin-bottom: 10px;
      font-size: 16px;
    }

    .publish-btn {
      width: 120px;
      margin: 0 auto;
    }
  }

  .title {
    margin-bottom: 20px;
    font-size: 18px;
    font-weight: 700;
    color: rgba(119, 127, 141, .8);
    user-select: none;
  }
}

.mr10 {
  margin-right: 10px;
}

.mt10 {
  margin-bottom: 10px;
}

.mavon-editor {
  z-index: 1;
  border: 1px solid #d9d9d9;
  height: calc(100vh - 62px);
  font-size: 16px;
}

/deep/ .markdown-body code {
  font-family: Consolas, "Microsoft YaHei", serif !important;
  font-size: 16px;
}

/deep/ .markdown-body pre {
  padding: 15px;
  background-color: #111;
  color: #d6deeb;
}

/deep/ .hljs {
  display: block;
  overflow-x: auto;
  background: #111;
  color: #d6deeb;
  border-radius: 4px;
}

/* General Purpose */
/deep/ .hljs-keyword {
  color: #c792ea;
  font-style: italic;
}

/deep/ .hljs-built_in {
  color: #1dd1a1;
  font-style: italic;
}

/deep/ .hljs-type {
  color: #82aaff;
}

/deep/ .hljs-literal {
  color: #ff5874;
}

/deep/ .hljs-number {
  color: #F78C6C;
}

/deep/ .hljs-regexp {
  color: #5ca7e4;
}

/deep/ .hljs-string {
  color: #ecc48d;
}

/deep/ .hljs-subst {
  color: #d3423e;
}

/deep/ .hljs-symbol {
  color: #82aaff;
}

/deep/ .hljs-class {
  color: #ffcb8b;
}

/deep/ .hljs-function {
  color: #82AAFF;
}

/deep/ .hljs-title {
  color: #DCDCAA;
  font-style: italic;
}

/deep/ .hljs-params {
  color: #7fdbca;
}

/* Meta */
/deep/ .hljs-comment {
  color: #637777;
  font-style: italic;
}

/deep/ .hljs-doctag {
  color: #7fdbca;
}

/deep/ .hljs-meta {
  color: #82aaff;
}

/deep/ .hljs-meta-keyword {
  color: #82aaff;
}

/deep/ .hljs-meta-string {
  color: #ecc48d;
}

/* Tags, attributes, config */
/deep/ .hljs-section {
  color: #82b1ff;
}

/deep/ .hljs-tag,
/deep/ .hljs-name,
/deep/ .hljs-builtin-name {
  color: #7fdbca;
}

/deep/ .hljs-attr {
  color: #7fdbca;
}

/deep/ .hljs-attribute {
  color: #80cbc4;
}

/deep/ .hljs-variable {
  color: #55efc4;
}

/* Markup */
/deep/ .hljs-bullet {
  color: #d9f5dd;
}

/deep/ .hljs-code {
  color: #80CBC4;
}

/deep/ .hljs-emphasis {
  color: #c792ea;
  font-style: italic;
}

/deep/ .hljs-strong {
  color: #55efc4;
  font-weight: bold;
}

/deep/ .hljs-formula {
  color: #c792ea;
}

/deep/ .hljs-link {
  color: #ff869a;
}

/deep/ .hljs-quote {
  color: #697098;
  font-style: italic;
}

/* CSS */
/deep/ .hljs-selector-tag {
  color: #ff6363;
}

/deep/ .hljs-selector-id {
  color: #fad430;
}

/deep/ .hljs-selector-class {
  color: #1dd1a1;
  font-style: italic;
}

/deep/ .hljs-selector-attr,
/deep/ .hljs-selector-pseudo {
  color: #c792ea;
  font-style: italic;
}

/* Templates */
/deep/ .hljs-template-tag {
  color: #c792ea;
}

/deep/ .hljs-template-variable {
  color: #addb67;
}

/* diff */
/deep/ .hljs-addition {
  color: #addb67ff;
  font-style: italic;
}

/deep/ .hljs-deletion {
  color: #EF535090;
  font-style: italic;
}
</style>
