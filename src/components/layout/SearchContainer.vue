<template>
  <div class="header">
    <h1>Knowledge base doesn't have to be boring</h1>
    <p>Everything you need to Manage your Messaging</p>
    <div class="search-container">
      <input type="text" v-model="localSearchQuery" placeholder="Search for answers">
      <button @click="performSearch">
        <span class="sr-only">Search</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchContainer',
  data() {
    return {
      localSearchQuery: ''
    }
  },
  methods: {
    performSearch() {
      this.$emit('search', this.localSearchQuery)
      console.log(this.localSearchQuery)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/_variables.scss';

.header {
  font-family: Arial, sans-serif;
  margin:auto;
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

      input[type=text]:focus {
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