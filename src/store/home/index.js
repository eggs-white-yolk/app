import { reqCategoryList, reqBanners, reqFloors } from '@/api';

const state = {
  categoryList: [],
  bannerList: [],
  floorList: [],
};
const actions = {
  async categoryList({ commit }, value) {
    let result = await reqCategoryList();
    if (result.code === 200) {
      commit('CATEGORYLIST', result.data);
    }
  },
  async getBannerList(context, value) {
    let result = await reqBanners();
    if (result.code === 200) {
      context.commit('BANNERLIST', result.data);
    }
  },

  async getFloorList({ commit }, value) {
    let result = await reqFloors();
    if (result.code === 200) {
      commit('FLOORLIST', result.data);
    }
  },
};
const mutations = {
  CATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList;
  },
  BANNERLIST(state, bannerList) {
    state.bannerList = bannerList;
  },
  FLOORLIST(state, floorList) {
    state.floorList = floorList;
  },
};
const getters = {};
export default {
  state,
  actions,
  mutations,
  getters,
};
