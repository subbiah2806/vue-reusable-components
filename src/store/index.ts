import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    theme: ""
  },
  getters: {
    getTheme: state => {
      return state.theme;
    }
  },
  mutations: {
    THEME: (state, payload) => {
      state.theme = payload;
    }
  },
  actions: {
    setTheme: ({ commit }, payload) => {
      const body = document.getElementsByTagName("body");
      body[0].className = `theme-${payload}`;
      commit("THEME", payload);
    }
  }
});
