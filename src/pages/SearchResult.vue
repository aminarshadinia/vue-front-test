<template>
  <div class="header">
    <h1>Knowledge base doesn't have to be boring</h1>
    <p>Everything you need to Manage your Messaging</p>
    <div class="search-container">
      <input type="text" v-model="localSearchQuery" placeholder="Search for answers" @input="updateQuery">
      <button @click="performSearch">
        <span class="sr-only">Search</span>
        <SearchIcon />
      </button>
    </div>

    <div class="breadcrumb">
        <router-link :to="{ name: 'Home' }" class="breadcrumb-link">All categories</router-link>
        <span class="breadcrumb-separator">&gt;</span>
        <span class="breadcrumb-current">Search</span>
      </div>

    <h1>Search results</h1>

    <p v-if="searchResult.length === 0"> No Search Results</p>
    <ul v-if="searchResult.length > 0">
      <li v-for="res in searchResult" :key="res.id">
        {{ res.title }}
      </li>
    </ul>
    
  </div>
</template>

<script>
import SearchIcon from '../components/widgets/SearchIcon.vue';
import { searchMixin } from '../services/searchMixin.js';
import axios from 'axios';

export default {
  name: 'SearchResult',

  mixins: [searchMixin],
   
  data() {
    return {
      localSearchQuery: '',
      searchResult: [],
    };
  },

  watch: {
    '$route.query.q': {
      immediate: true,
      handler(newQuery) {
        if (newQuery) {
          this.localSearchQuery = newQuery;
          this.performSearch(newQuery);
        }
      }
    }
  },

  components: {
    SearchIcon,
  },

  methods: {

    updateQuery() {
      this.$router.push({ query: { q: this.localSearchQuery } });
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../scss/_variables.scss';

.header {
  font-family: Arial, sans-serif;
  margin: auto;
  padding: 20px;
  text-align: center;
  background-color: white;

  h1 {
    font-size: 2em;
    font-weight: 700;
    color: $text-color;
  }

  p {
    font-size: 1em;
    color: $text-color;
  }
}

.search-container {
  display: flex;
  justify-content: center;
  margin: 30px 0 50px 0;
  color: #9C9AA6;

  input[type="text"] {
    width: 700px;
    padding: 10px;
    font-size: 1em;
    border: 1px solid $border-color;
    border-radius: 4px 0 0 4px;
    font-size: 0.8em;
    outline: none;
    color: $search-color;
  }

  input[type="text"]::placeholder {
    color: $search-color;
    opacity: 1; /*to handle Firefox */
  }

  input[type="text"]:focus {
    border: 1px solid $search-placeholder-color;
  }

  button {
    padding: 10px 20px;
    background-color: $primary-color;
    color: $search-button-color;
    border: none;
    border-radius: 0 4px 4px 0;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: darken($primary-color, 10%);
    }
  }
}

  .breadcrumb {
    margin: 20px 0;
    font-size: 0.9em;

    .breadcrumb-link {
      color: $primary-color;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    .breadcrumb-separator {
      margin: 0 5px;
      color: $text-gray;
    }

    .breadcrumb-current {
      color: $text-gray;
    }
  }

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
</style>
