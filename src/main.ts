import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import DemoVue from './pages/Demo.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: DemoVue
    }
  ]
});

const app = createApp(App).use(router);

app.mount('#app');
