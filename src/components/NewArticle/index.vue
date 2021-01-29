<template>
  <div class="new-article">
    <div class="header">
      <div class="left">
        <input type="text" placeholder="请输入文章标题..." class="title">
      </div>
      <div class="right">
        <button>发布</button>
      </div>
    </div>
    <mavon-editor
        ref="md"
        placeholder="请输入文档内容..."
        :boxShadow="false"
        class="mavon-editor"
        v-model="content"
        :toolbars="toolbars"
        fontSize="16px"
    />
  </div>
</template>

<script>
export default {
  components: {},
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
      }
    };
  },
  methods: {
    // 上传图片方法
    $imgAdd(pos, $file) {
      console.log(pos, $file);
    }
  }
};
</script>
<style lang="less" scoped>
.new-article{
  overflow-x: hidden;
}
.header{
  width: 100%;
  height: 60px;
  line-height: 60px;
  padding: 0 20px;
  box-sizing: border-box;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
}
.left{
  flex: 1;
  margin-right: 20px;
}
.title{
  width: 100%;
  border: none;
  outline: none;
  font-size: 22px;
  letter-spacing: 1px;
  font-weight: 700;
  vertical-align: middle;
  &:focus{
    border-color: transparent;
    box-shadow: none;
  }
}
.right{
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
.mavon-editor{
  z-index: 1;
  border: 1px solid #d9d9d9;
  height: calc(100vh - 62px);
  font-size: 16px;
}
/deep/ .markdown-body code{
  font-family: Consolas, "Microsoft YaHei", serif !important;
  font-size: 16px;
}
/deep/ .markdown-body pre{
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
