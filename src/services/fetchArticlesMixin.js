import axios from 'axios';

export const fetchArticlesMixin = {
  data() {
    return {
      articles: [],
      loading: true,
      error: null,
    };
  },
  methods: {
    async fetchArticles(slug) {
      try {
        const response = await axios.get(`/api/category/${slug}`);
        this.articles = response.data;
        this.loading = false;
      } catch (error) {
        console.error('Error fetching articles:', error);
        this.error = 'Failed to load articles. Please try again later.';
        this.loading = false;
      }
    }
  }
};
