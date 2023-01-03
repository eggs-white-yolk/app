import axios from 'axios';

// nprogress 进度条
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';

// start 进度条开始， done 进度条结束
const requests = axios.create({
  baseURL: '/api',
  timeout: 5000,
});
requests.interceptors.request.use(
  (config) => {
    nprogress.start();
    /* 5. 每次请求总是携带用户临时ID(不管是否登陆) */
    config.headers['userTempId'] = store.state.user.userTempId;
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);
requests.interceptors.response.use(
  (res) => {
    nprogress.done();
    return res.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default requests;
