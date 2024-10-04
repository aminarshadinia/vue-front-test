import axios from 'axios';

export const fetchCategoriesMixin = {
  data() {
    return {
      categories: [],
      loading: true,
      error: null,
    };
  },
  methods: {
    async fetchCategories() {
      try {
        const response = await axios.get('/api/categories')
        this.categories = response.data
        this.loading = false
      } catch (error) {
        console.error('Error fetching categories:', error)
        this.error = 'Failed to load categories. Please try again later.'
        this.loading = false
      }
    },
  }
};
