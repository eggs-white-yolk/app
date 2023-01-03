import { getUserTempId } from '@/utils/storageUtils';
/* 
用于操作首页模块数据的vuex模块
*/
const state = {
  userInfo: {}, // 登陆的用户信息对象
  userTempId: getUserTempId(), // 登陆前的唯一标识, 发送请求时需要携带
};
const mutations = {};
const actions = {};
const getters = {};
export default {
  state,
  mutations,
  actions,
  getters,
};
