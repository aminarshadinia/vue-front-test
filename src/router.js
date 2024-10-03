import KnowledgeBase from "./components/KnowledgeBase.vue";
import CategoryArticles from "./components/CategoryArticles.vue";
import VueRouter from 'vue-router'

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: KnowledgeBase
  },
]

export const router = new VueRouter({
  mode: 'history',
  routes
})