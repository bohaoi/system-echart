import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//1.引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//2.引入axios
import http from './api/config'
//3.引入mock
import './mock'

Vue.use(ElementUI);

Vue.config.productionTip = false
Vue.prototype.$http = http;

router.beforeEach((to, from, next) => {
  // 防止刷新后vuex里丢失token
  store.commit('getToken')
  // 防止刷新后vuex里丢失标签列表tagList
  store.commit('getMenu')
  let token = store.state.user.token
  // 过滤登录页，防止死循环
  if (!token && to.name !== 'login') {
    next({ name: 'login' })
  } else {
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
