<template>
  <div>
    <Header/>
    <div id="main">
      <div class="content">
        <div class="content-left">
          <article-detail :articleDetail="articleDetail"/>
        </div>
        <div class="content-right">
          <about-author/>
          <article-toc :htmlArticle="articleDetail.htmlArticle"/>
        </div>
      </div>
    </div>
    <back-to-top/>
  </div>
</template>

<script>
import Header from '@/components/Header/index'
import ArticleDetail from '@/components/ArticleDetail/index'
import AboutAuthor from '@/components/AboutAuthor/index'
import ArticleToc from '@/components/ArticleToc/index'
import Comment from '@/components/Comment/index'
import BackToTop from '@/components/BackToTop/index'
import marked from 'marked'
export default {
  components: {
    Header,
    ArticleDetail,
    AboutAuthor,
    ArticleToc,
    Comment,
    BackToTop
  },
  mounted() {
    this.articleDetail.htmlArticle = marked(this.articleDetail.mdArticle);
  },
  data(){
    return{
      articleDetail: {
        articleImg: require('@/assets/img/bingbing.png'),
        articleTitle: 'JavaScript实现函数防抖和函数节流',
        articleTags: ['JavaScript', 'code'],
        articleData: {
          time: '2020-10-20',
          watch: '666'
        },
        mdArticle: '## 概述\n' +
            '\n' +
            'Vuex 是一个专为 Vue.js 应用程序开发的**状态管理模式**，它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化\n' +
            '\n' +
            '## Vuex 工作流程\n' +
            '\n' +
            '![vuex](https://blogimg2020.oss-cn-shenzhen.aliyuncs.com/blogimg/vuex.png)\n' +
            '\n' +
            '## Vuex 目录结构\n' +
            '\n' +
            '**store：**\n' +
            '\n' +
            '- index.js：初始化 store\n' +
            '- state.js：store 中管理的状态\n' +
            '- getter.js：对状态进行加工处理\n' +
            '- mutations.js：修改 store 中的状态\n' +
            '- action.js：异步提交 mutation 修改状态\n' +
            '- mutations-type.js：存放 mutations 方法常量的文件，可按需加入\n' +
            '- modules：模块化 store\n' +
            '\n' +
            '## Vuex 详解\n' +
            '\n' +
            '### 初步使用 Vuex\n' +
            '\n' +
            '**1.初始化 store**\n' +
            '\n' +
            '**index.js**\n' +
            '\n' +
            '```js\n' +
            'import Vue from \'vue\'\n' +
            'import Vuex from \'vuex\'\n' +
            '\n' +
            '//挂载Vuex\n' +
            'Vue.use(Vuex)\n' +
            '\n' +
            '//创建VueX对象\n' +
            'const store = new Vuex.Store({\n' +
            '    state:{\n' +
            '        //存放的键值对就是store中管理的状态\n' +
            '        name: \'hello Vuex\'\n' +
            '    }\n' +
            '})\n' +
            'export default store\n' +
            '```\n' +
            '\n' +
            '**2.将 store 挂载到 Vue 实例上**\n' +
            '\n' +
            '**main.js**\n' +
            '\n' +
            '```js\n' +
            'import Vue from \'vue\'\n' +
            'import App from \'./App\'\n' +
            'import store from \'./store\'\n' +
            '\n' +
            'new Vue({\n' +
            '  el: \'#app\',\n' +
            '  render: h => h(App),\n' +
            '  store\n' +
            '})\n' +
            '```\n' +
            '\n' +
            '通过在根实例中注册 `store` 选项，该 store 实例会注入到根组件下的所有子组件中，且子组件能通过 `this.$store` 访问到\n' +
            '\n' +
            '### state.js\n' +
            '\n' +
            '如上所示在创建 Vuex 对象时声明 state，如果管理的状态过多，会难以维护，所以将 state 抽离出来\n' +
            '\n' +
            '```js\n' +
            'export default{\n' +
            '    todos: [\n' +
            '        {\n' +
            '            title: \'学习Vuex\',\n' +
            '            done: true\n' +
            '        }\n' +
            '    ]\n' +
            '}\n' +
            '```\n' +
            '\n' +
            '**通过 $store 获取**\n' +
            '\n' +
            '```html\n' +
            '<template>\n' +
            '    <div id="app">\n' +
            '        <h1>{{ $store.state.todos[0].title }}</h1>\n' +
            '    </div>\n' +
            '</template>\n' +
            '\n' +
            '```\n' +
            '\n' +
            '**使用 mapState 辅助函数获取**\n' +
            '\n' +
            '```js\n' +
            'import { mapState } from \'vuex\'\n' +
            '\n' +
            'computed: {\n' +
            '    ...mapState([\'todos\'])\n' +
            '}\n' +
            '```\n' +
            '\n' +
            '### getter.js\n' +
            '\n' +
            '对 store 中管理的状态的加工处理，都放在 getter.js 中\n' +
            '\n' +
            '例如返回 todos 中已完成的数量\n' +
            '\n' +
            '```js\n' +
            'export default{\n' +
            '    todosDoneCount(state){\n' +
            '        return state.todos.reduce((preTotal, todo) => \n' +
            '                                 preTotal + (todo.done ? 1 : 0), 0)\n' +
            '    }\n' +
            '}\n' +
            '```\n' +
            '\n' +
            '**通过 $store 获取**\n' +
            '\n' +
            '```js\n' +
            'computed: {\n' +
            '    todosDoneCount(){\n' +
            '        return this.$store.getter.todosDoneCount\n' +
            '    }\n' +
            '}\n' +
            '```\n' +
            '\n' +
            '**使用 mapGetter 辅助函数获取**\n' +
            '\n' +
            '```js\n' +
            'import { mapGetters } from \'vuex\'\n' +
            '\n' +
            'export default {\n' +
            '  ...\n' +
            '  computed: {\n' +
            '  // 使用对象展开运算符将 getter 混入 computed 对象中\n' +
            '    ...mapGetters([\n' +
            '      \'todosDoneCount\',\n' +
            '      \'anotherGetter\',\n' +
            '      // ...\n' +
            '    ])\n' +
            '  }\n' +
            '}\n' +
            '```\n' +
            '\n' +
            '也可以为 getter 属性指定名称\n' +
            '\n' +
            '```js\n' +
            '...mapGetters([\n' +
            '    doneCount: \'todosDoneCount\'\n' +
            '])\n' +
            '```\n' +
            '\n' +
            '将 `this.doneCount` 映射为 `this.$store.getter.todos.DoneCount`\n' +
            '\n' +
            '### mutations.js\n' +
            '\n' +
            '修改 store 中管理的状态，同步操作\n' +
            '\n' +
            '```js\n' +
            'export default{\n' +
            '    addTodo(state, todo){\n' +
            '        state.todos.push(todo)\n' +
            '    }\n' +
            '}\n' +
            '```\n' +
            '\n' +
            '注意不能直接调用 mutations 中的方法，需要以相应的 type 调用 **store.commit** 方法\n' +
            '\n' +
            '```js\n' +
            'this.$store.commit(\'addTodo\', {\n' +
            '    title: \'学习Vue\',\n' +
            '    done: true\n' +
            '})\n' +
            '```\n' +
            '\n' +
            '**使用常量替代 mutation 事件类型**\n' +
            '\n' +
            '**mutation-types.js**\n' +
            '\n' +
            '```js\n' +
            'export const ADD_TODO = \'add_todo\'\n' +
            '```\n' +
            '\n' +
            '**mutations.js**\n' +
            '\n' +
            '```js\n' +
            'import { ADD_TODO } from \'./mutation-types\'\n' +
            '\n' +
            'export default{\n' +
            '    [ADD_TODO](state, {todo}){\n' +
            '        ...\n' +
            '    }\n' +
            '}\n' +
            '```\n' +
            '\n' +
            '### actions.js\n' +
            '\n' +
            '在 actions.js 中**异步**提交 mutation 修改状态\n' +
            '\n' +
            '```js\n' +
            'export default{\n' +
            '    addTodo(context){\n' +
            '        context.commit(\'addTodo\')\n' +
            '    }\n' +
            '}\n' +
            '```\n' +
            '\n' +
            'context 对象具有与 store 实例相同的方法和属性\n' +
            '\n' +
            '可以通过 ES6 的参数解构来简化代码\n' +
            '\n' +
            '```js\n' +
            'export default{\n' +
            '    addTodo({commit}, todo){\n' +
            '        commit(\'addTodo\', {todo})\n' +
            '    }\n' +
            '}\n' +
            '```\n' +
            '\n' +
            '**通过 $store 触发**\n' +
            '\n' +
            '```js\n' +
            'export default{\n' +
            '    ...\n' +
            '    methods: {\n' +
            '        addTodo(todo){\n' +
            '            this.$store.diapatch(\'addTodo\', todo)\n' +
            '        }\n' +
            '    }\n' +
            '}\n' +
            '```\n' +
            '\n' +
            '**使用 mapActions**\n' +
            '\n' +
            '```js\n' +
            'import { mapActions } from \'vuex\'\n' +
            '\n' +
            'export default {\n' +
            '  ...\n' +
            '  methods: {\n' +
            '    ...mapActions({\n' +
            '      add: \'addTodo\' // 将 `this.add()` 映射为 `this.$store.dispatch(\'addTodo\')`\n' +
            '    })\n' +
            '  }\n' +
            '}\n' +
            '```\n' +
            '\n' +
            '### modules\n' +
            '\n' +
            'Vuex 允许我们将 store 分割成**模块（module）**。每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块——从上至下进行同样方式的分割：\n' +
            '\n' +
            '```js\n' +
            'const moduleA = {\n' +
            '  state: () => ({ ... }),\n' +
            '  mutations: { ... },\n' +
            '  actions: { ... },\n' +
            '  getters: { ... }\n' +
            '}\n' +
            '\n' +
            'const moduleB = {\n' +
            '  state: () => ({ ... }),\n' +
            '  mutations: { ... },\n' +
            '  actions: { ... }\n' +
            '}\n' +
            '\n' +
            'const store = new Vuex.Store({\n' +
            '  modules: {\n' +
            '    a: moduleA,\n' +
            '    b: moduleB\n' +
            '  }\n' +
            '})\n' +
            '\n' +
            'store.state.a // -> moduleA 的状态\n' +
            'store.state.b // -> moduleB 的状态\n' +
            '```',
        htmlArticle: '',
      },
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import "../../assets/css/main";
</style>
