import Home from "./components/Home.vue";
import CategoryArticles from "./components/CategoryArticles.vue";
import NotFound from "./pages/NotFound.vue";
import VueRouter from 'vue-router'

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
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  },
]

export const router = new VueRouter({
  mode: 'history',
  routes
})