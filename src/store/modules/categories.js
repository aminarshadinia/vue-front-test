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



export default {

  state,

};