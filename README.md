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

6.为什么需要二次封装 axios
请求拦截器，响应拦截器，请求拦截器，可以在发请求之前可以处理一些业务，响应拦截器，当服务器数据返回以后，可以处理一些事情。

7.接口的统一管理
项目很小：完全可以在组件的声明周期中发送请求
项目大：axios.get('xxx');
