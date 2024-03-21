/* eslint-disable */
// import Vue from 'vue';
import TDesign from 'tdesign-vue-next';
import routes from './routes';
import App from './App.vue';
import '@/style/index.less';

// import tdesign style;
import 'tdesign-vue-next/es/style/index.css';

// import site webcomponents
import '@xxxxx/tdesign-site-components';
import '@xxxxx/tdesign-site-components/lib/styles/style.css';
import '@xxxxx/tdesign-site-components/lib/styles/prism-theme.less';
import '@xxxxx/tdesign-site-components/lib/styles/prism-theme-dark.less';
import "tdesign-icons-view";
import { registerLocaleChange } from '@xxxxx/tdesign-site-components';

registerLocaleChange()

// Vue.use(TDesign);
// Vue.use(VueRouter);

// Vue.config.ignoredElements = [/^td-/];

// const router = new VueRouter({
//   mode: 'history',
//   base: 'site',
//   routes,
// });
import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory("/site/"),
  routes: routes,
  scrollBehavior() {
    return {
      el: '#app',
      top: 0,
      behavior: 'smooth',
    };
  },
});


router.beforeEach((to, from, next) => {
  if (to.name !== from.name) {
    window.NProgress && NProgress.start?.();
  }
  next();
});

// router.afterEach(() => {
//   window.NProgress && NProgress.done?.();
//   document.querySelector('td-stats')?.track?.();
// });

import { createApp } from 'vue';

const app = createApp(App);

app.use(TDesign);
// app.use(store);
app.use(router);
app.mount('#app');
