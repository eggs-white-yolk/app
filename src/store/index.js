import Vue from 'vue';
import Vuex from 'vuex';
// 使用 Vuex 插件
Vue.use(Vuex);

import calcCount from '@/store/calc/index';
import home from '@/store/home';
import search from '@/store/search';
import detail from '@/store/detail';

export default new Vuex.Store({
  modules: {
    calcCount,
    home,
    search,
    detail,
  },
});
