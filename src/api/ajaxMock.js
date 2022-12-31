import axios from 'axios';
// nprogress 进度条
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';
const mockAjax = axios.create({
  baseURL: '/mock',
  timeout: 10000,
});

mockAjax.interceptors.request.use(
  (config) => {
    nprogress.start();
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

mockAjax.interceptors.response.use(
  (res) => {
    nprogress.done();
    return res.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default mockAjax;
