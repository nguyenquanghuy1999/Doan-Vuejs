import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { router } from './routes'
import VueResource from 'vue-resource'
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';



Vue.use(VueRouter);
Vue.use(VueResource);

require('@/assets/css/home.css');
require('@/assets/css/bootstrap.min.frontend.css'),
require('@/assets/css/font-awesome.min.css'),
require('@/assets/css/footer.css')
require('@/assets/css/details.css')


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
