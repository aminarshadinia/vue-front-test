import axios from 'axios';

export const searchMixin = {
  data() {
    return {
      localSearchQuery: '',
      searchResult: [],
    };
  },
  methods: {
    async performSearch(query) {
      try {
        const response = await axios.get(`/api/search/${query || this.localSearchQuery}`);
        const result = response.data;
        this.searchResult = result.filter(res => res.title.toLowerCase().includes(query.toLowerCase()));
      } catch (error) {
        console.error('Error fetching results:', error);
      }
    },
  },
};
