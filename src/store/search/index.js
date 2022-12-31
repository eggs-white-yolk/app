import { reqSearchList } from '@/api';
// 响应结果参数的封装
import Const from '@/const';
const actions = {
  async getSearchList({ commit }, params) {
    let result = await reqSearchList(params);

    if (result.code === Const.CODE) {
      commit('GETSEARCHLIST', result.data);
    }
  },
};
const mutations = {
  GETSEARCHLIST(state, searchList) {
    state.searchList = searchList;
  },
};
const state = {
  searchList: [],
};
const getters = {
  searchList(state) {
    return state.searchList;
  },
  attrsList(state) {
    if (state.searchList) {
      return state.searchList.attrsList;
    }
    return [];
  },
  goodsList(state) {
    if (state.searchList) {
      return state.searchList.goodsList;
    }
    return [];
  },
  trademarkList(state) {
    if (state.searchList) {
      return state.searchList.trademarkList;
    }
    return [];
  },
};
export default {
  actions,
  mutations,
  state,
  getters,
};
