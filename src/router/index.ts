import { createRouter, createWebHistory, createMemoryHistory } from 'vue-router';

export default function () {
  const routerHistory = import.meta.env.SSR === false ? createWebHistory() : createMemoryHistory();

  return createRouter({
    history: routerHistory,
    routes: [
      {
        path: '/',
        name: 'home',
        component: () => import('../views/Home.vue'),
        meta: {
          title: 'Home title'
        }
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('../views/About.vue')
      },
      {
        path: '/:catchAll(.*)*',
        name: '404',
        component: () => import('../views/404.vue'),
        meta: {
          title: '404 Not Found'
        }
      }
    ]
  });
}
