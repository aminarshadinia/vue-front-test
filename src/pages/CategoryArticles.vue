<template>
  <div class="wrapper">
    <SearchContainer @search="handleSearch" />

    <div v-if="loading" class="loading">Loading categories...</div>
    <div v-else-if="error" class="error">{{ error }}</div>

    <div class="category-articles">
      <div class="breadcrumb">
        <router-link :to="{ name: 'Home' }" class="breadcrumb-link">All categories</router-link>
        <span class="breadcrumb-separator">&gt;</span>
        <span class="breadcrumb-current">{{ title }}</span>
      </div>

      <div class="content">
        <div class="sidebar">
          <div class="card">
            <div class="svg-button">
              <icon :name="svgIcon"></icon>
            </div>
            <p class="title">{{ title }}</p>
            <p class="subtitle">Updated {{ catUpdatedOn }}</p>
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
          <div v-for="article in publishedArticles" :key="article.id" class="article-item">
            <div class="article-icon">
              <ArticleIcon />
            </div>
            <div class="article-content">
              <h3>{{ article.title }}</h3>
              <p>Updated {{ formattedDate(article.updatedOn) }}</p>
            </div>
            <div class="article-arrow">
              <ArrowIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import icon from '../components/widgets/Icon.vue';
import { formattedDateMixin } from '../utilities/formattedDateMixin';
import { fetchArticlesMixin } from '../services/fetchArticlesMixin';
import InfoIcon from '../components/widgets/InfoIcon.vue';
import ArticleIcon from '../components/widgets/ArticleIcon.vue';
import ArrowIcon from '../components/widgets/ArrowIcon.vue';

export default {
  name: 'CategoryArticles',

  mixins: [formattedDateMixin , fetchArticlesMixin],

  props: ['slug', 'title', 'svgIcon', 'catUpdatedOn'],
  
    components: {
      SearchContainer: () => import('../components/layout/SearchContainer.vue'),
      icon,
      InfoIcon,
      ArticleIcon,
      ArrowIcon,
  
},
  data() {
    return {
      articles: [],
      loading: true,
      error: null,
    }
  },

  computed: {
    publishedArticles() {
      return this.articles.filter(article => article.status === "published");
    }
  },
  async created() {
    await this.fetchArticles(this.slug);
  },

  methods: {

    handleSearch(query) {
      console.log('Searching for:', query)
    },
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/_variables.scss';

.category-articles {
  font-family: Arial, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;

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

  .content {
    display: flex;
    gap: 50px;

    @media (max-width: 750px) {
    // Styles for screens smaller than 750px
    display: block; 
    // Change the layout for small screens
    }

    .sidebar {
      flex: 0 0 250px;

      .category-card {
        background-color: $background-color;
        padding: 20px;
        border-radius: 8px;
        margin-bottom: 20px;
        border: 1px solid $border-color;
        

        .icon {
          margin-bottom: 10px;

          svg {
            width: 48px;
            height: 48px;
            stroke: $primary-color;
          }
        }

        p {
          font-size: 0.9em;
          color: lighten($text-color, 20%);
        }
      }

      .category-description {
        align-items: center;
        gap: 10px;
        

        svg {
          width: 24px;
          height: 24px;
          stroke: $primary-color;
          display: flex;
          align-items: center;
        }

        p {
          font-size: 0.9em;
          color: lighten($text-color, 20%);
          margin: 0;
        }
      }
    }

    .article-list {
      flex: 1;

      .article-item {
        display: flex;
        align-items: center;
        padding: 25px;
        margin-bottom: 20px;
        border: 1px solid $border-color;
        border-radius: 4px;
        transition: background-color 0.3s ease;
        background-color: $background-color;

        &:last-child {
          margin-bottom: 0; // Remove margin from the last item
          border-bottom: none; // Remove border from the last item
        }
        &:hover {
          background-color: rgb(221, 221, 221);
        }
        

        .article-icon {
          margin-right: 15px;

          svg {
            width: 24px;
            height: 24px;
            stroke: $primary-color;
          }
        }

        .article-content {
          flex: 1;

          h3 {
            font-size: 1.1em;
            margin: 0 0 5px;
          }

          p {
            font-size: 0.9em;
            color: lighten($text-color, 20%);
            margin: 0;
          }
        }

        .article-arrow {
          svg {
            width: 24px;
            height: 24px;
            stroke: $primary-color;
          }
        }
      }
    }
  }
}

.card {
  background-color: #ffffff;
  border-radius: 12px;
  // box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid $border-color;
  padding: 20px;
  width: 240px;
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 20px;
}

.title {
  font-size: 23px;
  font-weight: bold;
  color: $text-color;
  margin-bottom: 8px;
}

.subtitle {
  font-size: 11px;
  color: $text-gray;
  margin-bottom: 20px;

}
.border{
    border-bottom: 1px solid $border-color;
    margin-bottom: 10px;

}

.info-icon {
  width: 24px;
  height: 24px;
  margin: 0 auto 16px;
  
  svg {
    width: 100%;
    height: 100%;
    stroke: #00c853;
  }
}

.description {
  font-size: 14px;
  color: $text-gray;
  line-height: 1.5;}


</style>