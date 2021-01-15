import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';





require('@/assets/css/home.css');
require('@/assets/css/bootstrap.min.frontend.css'),
require('@/assets/css/font-awesome.min.css'),
require('@/assets/css/footer.css')


Vue.config.productionTip = false

new Vue({
  
  render: h => h(App),
}).$mount('#app')
