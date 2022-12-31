import { reqGoodsInfo } from '@/api';
import Const from '@/const';
const actions = {
  async getGoodsDetailInfo({ commit }, params) {
    let result = await reqGoodsInfo(params);
    if (result.code === Const.CODE) {
      commit('GETGOODSINFO', result.data);
    }
  },
};
const mutations = {
  GETGOODSINFO(state, goodsDetailInfo) {
    state.goodsDetailInfo = goodsDetailInfo;
  },
};
const state = {
  goodsDetailInfo: {},
};
const getters = {
  goodsDetailInfo(state) {
    return state.goodsDetailInfo || {};
  },
  categoryView(state) {
    return state.goodsDetailInfo.categoryView || {};
  },
  skuInfo(state) {
    return state.goodsDetailInfo.skuInfo || {};
  },
  spuSaleAttrList(state) {
    return state.goodsDetailInfo.spuSaleAttrList || {};
  },
};
export default {
  actions,
  mutations,
  state,
  getters,
};
