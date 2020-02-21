import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import io from 'socket.io-client';

Vue.config.productionTip = false;

Vue.prototype.$socket = io.connect('http://172.16.19.81:8080/');

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
