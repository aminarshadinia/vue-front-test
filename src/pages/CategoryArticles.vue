<template>
<div class="wrapper">

    <div v-if="loading" class="loading">Loading categories...</div>
    <div v-else-if="error" class="error">{{ error }}</div>

  <div class="category-articles">
    <div class="breadcrumb">
      <router-link :to="{ name: 'Home' }" class="breadcrumb-link">All categories</router-link>
      <span class="breadcrumb-separator">&gt;</span>
      <span class="breadcrumb-current"></span>
    </div>

    <div class="content">
      <div class="sidebar">
        <div class="card">
          <div class="svg-button">
            <icon :name="this.svgIcon"></icon>
          </div>
            <p class="title"></p>
            <p class="subtitle">Updated </p>
            <div class="border"></div>

    <div class="info-icon">
      <InfoIcon />
    </div>
    <p class="description">
      De quibus cupio scire quid sentias. Quid, de quo nulla dissensio est Illum mallem levares sentias nulla dissensio.
    </p>
  
  </div>
      </div>
      <div class="article-list">
        <div  class="article-item">
          <div class="article-icon">
            <ArticleIcon />
          </div>
          <div class="article-content">
            <h3>{{ article.title }}</h3>
            <p>Updated </p>
          </div>
          <div class="article-arrow">
            
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>


export default {
  name: 'CategoryArticles',

  data() {
    return {
      articles: [],
      loading: true,
      error: null,
    }
  },


}
</script>

<style lang="scss" scoped>
@import '../scss/_variables.scss';



</style>