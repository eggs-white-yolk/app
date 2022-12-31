# app

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

5.路由配置
规则，守卫，重写 push，replace

6.为什么需要二次封装 axios
请求拦截器，响应拦截器，请求拦截器，可以在发请求之前可以处理一些业务，响应拦截器，当服务器数据返回以后，可以处理一些事情。

7.接口的统一管理
项目很小：完全可以在组件的声明周期中发送请求
项目大：axios.get('xxx');

8.nprogress 进度条
安装，引入，使用

9.vuex 模块开发
组件过多，数据量庞大，就需要用到 vuex，共用的数据可以存放到 vuex

9.3 vuex 模块化开发
const module1 = {state,actions,mutations,getters}
const module2 = {state,actions,mutations,getters}

防抖：前面的所有的触发都被取消，最后一次执行在规定的时间之后才会触发，也就是说如果连续快速的触发，只会执行一次
lodash _.debounce(func, [wait=0], [options=])
节流：在规定的时间间隔范围内不会重复触发回调，只有大于这个时间间隔才会触发回调，把频繁触发变为少量触发
lodash _.throttle(func, [wait=0], [options=])
