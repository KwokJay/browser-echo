import Vue from 'vue';
import App from './App.vue';
import { createBrowserEchoVue2Plugin } from '@browser-echo/vue2';

Vue.config.productionTip = false;

// Only install the plugin in development mode
if (process.env.NODE_ENV === 'development') {
  Vue.use(createBrowserEchoVue2Plugin());
}

new Vue({
  render: h => h(App),
}).$mount('#app');
