import { createStore } from "vuex";

export default createStore({
  state: {
    data: {

    },
    complete: false,
    keyboard: false,
    todos: {},
    storedData: {},
    userToken: false,
  },
  mutations: {
    setSelection(state, data) {
      state.data = data;
    },
    setComplete(state, complete) {
      state.complete = complete;
    },
    setKeyboard(state, keyboard) {
      state.keyboard = keyboard;
    },
    addTodo(state, { key, todo }) {
      state.todos[key] = todo;
    },
    deleteTodo(state, key) {
      delete state.todos[key];
    },
  },
  actions: {
    updateSelection({ commit, state }, data) {
      const updatedSelection = { ...state.data, ...data };
      commit("setSelection", updatedSelection);
    },
    formComplete({ commit }, complete) {
      commit("setComplete", complete);
    },
    activateKeyboard({ commit }, keyboard) {
      commit("setKeyboard", keyboard);
    },
  },
  getters: {
    getSelection: (state) => state.selection,
    getComplete: (state) => state.complete,
    getKeyboard: (state) => state.keyboard,
    getTodos: (state) => state.todos,
  },
});
