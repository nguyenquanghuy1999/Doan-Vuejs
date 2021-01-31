import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { router } from './routes'
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';


Vue.use(VueRouter);


require('@/assets/css/home.css');
require('@/assets/css/bootstrap.min.frontend.css'),
require('@/assets/css/font-awesome.min.css'),
require('@/assets/css/footer.css')
require('@/assets/css/details.css')
require('@/assets/css/cart.css')




Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
