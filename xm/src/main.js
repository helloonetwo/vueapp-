// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//引入
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.config.productionTip = false
//安装插件
Vue.use(MintUI);
//引入axios
import Axios   from  'axios';
Vue.prototype.$axios = Axios;
Axios.defaults.baseURL = 'https://www.sinya.online/api/';
//全局组件
import   MyUl   from  './components/common/MyUl'
import   MyLi   from  './components/common/MyLi';
Vue.component(MyUl.name,MyUl);
Vue.component(MyLi.name,MyLi);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
