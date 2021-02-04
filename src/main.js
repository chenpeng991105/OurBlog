import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import '@/assets/css/common.less'
import '@/assets/fonts/iconfont.css'
import '@/plugins/element'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import axios from "axios";

Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(mavonEditor)
Vue.directive('click-outside', {
  bind(el, bindings, vnode) {
    el.handle = e => {
      if (!el.contains(e.target)) {
        let method = bindings.expression
        vnode.context[method]()
      }
    }
    document.addEventListener('click', el.handle)
  },
  unbind(el) {
    document.removeEventListener('click', el.handle)
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
