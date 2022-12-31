// 对所有的api 接口进行统一的管理
import requests from '@/api/request';
import mockAjax from '@/api/ajaxMock';

// 三级联动分类接口
// /api/product/getBaseCategoryList

// 发送请求, 返回的结果是 Promise 对象
export const reqCategoryList = () =>
  requests({
    url: '/product/getBaseCategoryList',
    method: 'get',
  });

// 获取广告轮播列表
export const reqBanners = () =>
  mockAjax({
    method: 'get',
    url: '/banners',
  });

// 获取首页楼层列表
export const reqFloors = () =>
  mockAjax({
    method: 'get',
    url: '/floors',
  });

// search 组件内数据
export const reqSearchList = (params) =>
  requests({
    method: 'post',
    url: '/list',
    data: params,
  });

export const reqGoodsInfo = (params) => requests.get('/item/' + params);
