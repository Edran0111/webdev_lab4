import { createStore } from 'vuex';

export default createStore({
  state: {
    user: null,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    // You can define actions if needed, for example, to make async API calls.
  },
  modules: {
    // You can organize your store into modules if your app grows.
  },
});