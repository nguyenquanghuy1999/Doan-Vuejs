import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/pages/Home'
import Product from './components/pages/Product'


Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/', component: Home},
        {path:'/product', component: Product}
        
              
    ]
})