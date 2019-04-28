// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import echarts from 'echarts'
import demo from './components/echarts/demo.vue'
import store from './vuex/store'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
// import axios from 'axios'
// Vue.prototype.$axios = axios    //把axios挂载到vue的原型中，在vue中每个组件都可以使用axios发送请求
// axios.defaults.withCredentials = true
// Vue.prototype.baseUrl = 'http://localhost:9000'    //设置后端的网址
// import qs from 'qs'
// Vue.prototype.$qs = qs;
 
Vue.prototype.$echarts = echarts
Vue.use(ElementUI);
Vue.config.productionTip = false

// //使用钩子函数对路由进行权限跳转
// router.beforeEach((to, from, next) => {
//     var loginFlag  = store.state.loginFlag;
//     if (!loginFlag && to.path!='/Login' ) {
//         next('/Login');
//     } else  {
//         next();
//     } 
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,  
  store,
  components: { App },
  template: '<App/>'
})
