import { createSSRApp } from 'vue';
import App from './App.vue';
import { sync } from 'vuex-router-sync';

import createStore from './store';
import createRouter from './router';

const router = createRouter();
const store = createStore();
sync(store, router);

const app = createSSRApp(App);
app.use(router).use(store);

router.beforeResolve((to, from, next) => {
  next();
});

router.isReady().then(() => {
  app.mount('#app', true);
});
