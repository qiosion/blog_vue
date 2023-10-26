// Composables
import { createRouter, createWebHistory } from 'vue-router'
import BlogHome from '@/views/BlogHome.vue';

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: BlogHome,
        // component: () => import(/* webpackChunkName: "home" */ '@/views/BlogHome.vue'),
      },
      {
        path: 'blog',
        name: 'BlogPage',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/BlogPage.vue'),
      },
      {
        path: 'post',
        name: 'BlogPost',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/BlogPost.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
