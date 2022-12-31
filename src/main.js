import Vue from 'vue';
import App from '@/App.vue';
// 引入路由
import router from '@/router';
// 三级联动组件---该组件多次使用，故设置为全局组件
import TypeNav from '@/components/TypeNav';
// 轮播图组件
import Carousel from '@/components/Carousel';
// 引入仓库
import store from '@/store/index';
// 引入mockServe
import '@/mock/mockServe';
// 引入 swiper 样式
import 'swiper/css/swiper.css';
// 引入字体图标
import '@/assets/style.css';
// 引入分页组件
import Pagination from '@/components/Pagination';

Vue.component(Pagination.name, Pagination);
Vue.component(TypeNav.name, TypeNav);
Vue.component(Carousel.name, Carousel);
Vue.config.productionTip = false;
// Vue.prototype.requests = requests;
new Vue({
  render: (h) => h(App),
  // 注册路由，k v 一致省略v
  // 组件身上都会拥有$outer和$route
  router,
  // 注册仓库，组件实例上会多一个 $store
  store,
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
}).$mount('#app');
