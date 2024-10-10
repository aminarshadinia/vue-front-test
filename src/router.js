import Home from "./pages/Home.vue";
import CategoryArticles from "./pages/CategoryArticles.vue";
import NotFound from "./pages/NotFound.vue";
import VueRouter from 'vue-router'
import SearchResult from "./pages/SearchResult.vue";

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/category/:slug',
    name: 'CategoryArticles',
    component: CategoryArticles,
    props: route => ({
      slug: route.params.slug,
      title: route.params.title,
      svgIcon: route.params.svgIcon,
      catUpdatedOn: route.params.catUpdatedOn,
    })
  },
  {
    path: '/search',
    name: 'SearchResult',
    component: SearchResult,
    props: (route) => ({ localSearchQuery: route.query.q }) // Pass query param as a prop
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  },
]

export const router = new VueRouter({
  mode: 'history',
  routes
})