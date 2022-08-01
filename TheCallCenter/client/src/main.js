import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import filters from "./filters";
//import CallHubPlugin from './callHubPlugin';

//Vue.use(CallHubPlugin);
Vue.config.productionTip = false;
filters();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
