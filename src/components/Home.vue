

<template>
  <div class="home">
    <div class="knowledge-base">
      <div v-if="loading" class="loading">Loading categories...</div>
      <div v-else-if="error" class="error">{{ error }}</div>
      <div v-else class="categories">
        <router-link 
          v-for="category in enabledCategories" 
          :key="category.slug"
          :to="{ name: 'CategoryArticles', params: { slug: category.id , title: category.title } }"
          class="category"
        >
           <icon name="link"></icon>
          <p class="category-title">{{ category.title }}</p>
          <p class="category-article">{{ category.totalArticle }} articles</p>
          <p class="category-update">Last update {{ timeAgo(category.updatedOn) }}</p>
        </router-link>
      </div>
    </div>
  </div>
  
</template>

<script>
import axios from 'axios'

export default {
  name: 'Home',

  data() {
    return {
      searchQuery: '',
      categories: [],
      loading: true,
      error: null,
    }
  },

  mixins: [apiMixin],
  
  computed: {
    enabledCategories() {
      return this.categories
        .filter(category => category.enabled)
        .sort((a, b) => a.order - b.order)
    }
  },

  async created() {
    await this.fetchCategories()
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
}
</script>

<style lang="scss" scoped>
@import '../scss/_variables.scss';

.knowledge-base {
  font-family: Arial, sans-serif;
  max-width: 1200px;
  margin:0 auto;
  text-align: center;

  .categories {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(315px, 1fr));
    gap: 20px;
    margin-top: 40px;

    .category {
      width: 315px;
      height: 180px;
      background-color: $background-color;
      padding: 20px;
      border-radius: 8px;
      text-align: center;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      text-decoration: none;
      color: $text-color;
      border: 1px solid $border-color;

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      }

      .icon {
        margin-bottom: 10px;

        svg {
          width: 48px;
          height: 48px;
          stroke: $primary-color;
        }
      }

      .category-title {
        font-size: 1.2em;
        margin-bottom: 20px;
      }

      .category-article {
        font-size: 1em;
        margin: 0;
        padding: 0;
        color: $primary-color;
      }

      .category-update {
        font-size: 0.8em;
        margin: 0;
        padding: 0;
        color: $text-gray;
      }
    }
  }

  .loading, .error {
    font-size: 1.2em;
    margin-top: 40px;
  }

  .error {
    color: $error-color;
  }
}


.category-title {
font-size: 20px;
font-weight: bold;
}
.logo {
  width: 100px;
  height: auto;
}
</style>