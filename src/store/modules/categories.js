import axios from 'axios';

const state = {
  categories: [],
  loading: true,
  error: null,
};

const mutations = {
  SET_CATEGORIES(state, categories) {
    state.categories = categories;
  },
  SET_LOADING(state, loading) {
    state.loading = loading;
  },
  SET_ERROR(state, error) {
    state.error = error;
  },
};

const actions = {
  async fetchCategories({ commit }) {
    commit('SET_LOADING', true);
    try {
      const response = await axios.get('/api/categories');
      commit('SET_CATEGORIES', response.data);
      commit('SET_LOADING', false);
    } catch (error) {
      console.error('Error fetching categories:', error);
      commit('SET_ERROR', 'Failed to load categories. Please try again later.');
      commit('SET_LOADING', false);
    }
  },
};

const getters = {
  enabledCategories(state) {
    return state.categories.filter(category => category.enabled).sort((a, b) => a.order - b.order);
  },
};

export default {
  namespaced: true, // we use namespaced module to avoid conflict with other modules
  state,
  mutations,
  actions,
  getters,
};