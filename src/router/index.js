import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// 引入路由组件
import Home from '@/pages/Home/index';
// import TypeNav from '@/pages/Home/TypeNav/index';
import Login from '@/pages/Login/index';
import Register from '@/pages/Register/index';
import Search from '@/pages/Search/index';

const router = new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/home',
      component: Home,
      meta: {
        isFooter: true,
      },
      // children: [
      //   {
      //     name: 'typeNav',
      //     path: 'typeNav',
      //     component: TypeNav,
      //   },
      // ],
    },
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/register',
      component: Register,
      meta: {
        isFooter: true,
      },
    },
    {
      name: 'search',
      // 指定 params参数可传,可不传
      path: '/search/:keyword?',
      component: Search,
      // props: true,
      props({ params: { keyword } }) {
        return { keyword };
      },
    },
    // 重定向，访问  定位到首页
    {
      // path: '*',
      path: '/',
      redirect: '/home',
    },
  ],
});

// 前置全局守卫
router.beforeEach((to, from, next) => {
  next();
});

export default router;

// 先把VueRouter 原型对象的push 先保存一份。
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
// 重写 push 和replace 方法
// 第一个参数往哪里跳转 location，
// 第二个resolve
// reject
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    // call 与 apply 区别
    // 相同点：都可以调用一次函数，都可以篡改函数的上下文一次，
    // 不同点：call传递多个参数用逗号隔开，apply传递数组
    originPush.call(this, location, resolve, reject);
  } else {
    originPush.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};
VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, resolve, reject);
  } else {
    originReplace.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};
