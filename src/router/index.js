import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
Vue.use(VueRouter);

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

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    // 始终滚动到顶部
    if (to.path.indexOf('detail') != -1) {
      return {
        el: '#main',
        y: 100,
      };
    }
  },
});
// 前置全局守卫
router.beforeEach((to, from, next) => {
  next();
});

export default router;
