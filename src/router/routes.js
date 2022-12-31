// 引入路由组件
import Home from '@/pages/Home/index';
import Login from '@/pages/Login/index';
import Register from '@/pages/Register/index';
import Search from '@/pages/Search/index';
import Detail from '@/pages/Detail';
const routes = [
  {
    name: 'detail',
    path: '/detail/:goodsId',
    component: Detail,
    meta: {
      // 全部商品分类，鼠标移除就隐藏
      isMoveHiddeNav: true,
    },
    props({ params: { goodsId } }) {
      return { goodsId };
    },
  },
  {
    path: '/home',
    component: Home,
    meta: {
      isFooter: true,
    },
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
    meta: {
      isFooter: true,
      // 全部商品分类，鼠标移除就隐藏
      isMoveHiddeNav: true,
    },
  },
  // 重定向，访问  定位到首页
  {
    // path: '*',
    path: '/',
    redirect: '/home',
  },
];

export default routes;
