const calcCount = {
  namespaced: true,
  actions: {
    //   add(context, value) {
    //     context.commit('add', value);
    //   },
    add({ commit }, value) {
      commit('add', value);
    },
    substract({ commit }, value) {
      commit('substract', value);
    },
  },
  mutations: {
    add(state, value) {
      state.count += value;
    },
    substract(state, value) {
      state.count -= value;
    },
  },
  state: {
    count: 0,
  },
  // 理解为计算属性
  getters: {
    dahe(state) {
      return state.count * 10;
    },
  },
};
