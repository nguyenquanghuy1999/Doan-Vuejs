import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/pages/Home'
import ProductDetail from './components/pages/ProductDetail'


Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/', component: Home},
        {path: '/productdetail', component: ProductDetail}
        
        
              
    ]
})