// 对所有的api 接口进行统一的管理
import requests from '@/api/request';

// 三级联动分类接口
// /api/product/getBaseCategoryList

// 发送请求, 返回的结果是 Promise 对象
export const reqCategoryList = () =>
  requests({
    url: '/product/getBaseCategoryList',
    method: 'get',
  });
