import { createSSRApp } from 'vue';
import App from './App.vue';
import { renderToString } from '@vue/server-renderer';

import createStore from './store';
import createRouter from './router';
import { sync } from 'vuex-router-sync';

export async function render(url, manifest) {
  const router = createRouter();
  const store = createStore();
  sync(store, router);

  const app = createSSRApp(App);
  app.use(router).use(store);

  router.push(url);

  await router.isReady();

  const context = {};
  const appHtml = await renderToString(app, context);
  return { appHtml };
}
