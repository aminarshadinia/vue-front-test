

<template>
  <div>
    <div class="knowledge-base">
      <div v-if="loading" class="loading">Loading categories...</div>
      <div v-else-if="error" class="error"></div>
      <div v-else class="categories">
        <router-link 

          class="category"
        >
           <icon name="link"></icon>
          <p class="category-title"></p>
          <p class="category-article">articles</p>
          <p class="category-update">Last update</p>
        </router-link>
      </div>
    </div>
  </div>
  
</template>

<script>

</script>

<style lang="scss" scoped>

</style>