import KnowledgeBase from "./components/KnowledgeBase.vue";
import CategoryArticles from "./components/CategoryArticles.vue";
import VueRouter from 'vue-router'

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: KnowledgeBase
  },
  {
    path: '/category/:slug',
    name: 'CategoryArticles',
    component: CategoryArticles,
    props: true
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    // component: () => import('./Views/404.vue')
  },
]

export const router = new VueRouter({
  mode: 'history',
  routes
})