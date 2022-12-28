import Vue from 'vue';
import App from '@/App.vue';
// 引入路由
import router from '@/router';
// 三级联动组件---该组件多次使用，故设置为全局组件
import TypeNav from '@/pages/Home/TypeNav';

// 引入 axios
import requests from '@/api/request';
import { reqCategoryList } from '@/api/index';

Vue.component(TypeNav.name, TypeNav);
Vue.config.productionTip = false;
// Vue.prototype.requests = requests;
reqCategoryList();
new Vue({
  render: (h) => h(App),
  // 注册路由，k v 一致省略v
  // 组件身上都会拥有$outer和$route
  router,
}).$mount('#app');
