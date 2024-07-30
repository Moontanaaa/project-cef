import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import HomePage from './views/HomePage.vue';

createApp(App).use(router).mount('#app')

export default new Router({
    mode: 'hash', 
    routes: [
      {
        path: '/',
        name: 'HomePage',
        component: HomePage
      }
    ]
  });