import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/pages/Home'
import ProductDetail from './components/pages/ProductDetail'
import Types from './components/pages/Types'
import Cart from './components/pages/Cart'
import Search from './components/pages/Search'


Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/', 
        name: 'home',
        component: Home},

        {path: '/detail/:id',
        name: 'detailproduct',
        component: ProductDetail},
        
        {path: '/types/:id', 
        name: 'type',
        component: Types},

        {path:'/cart', 
        name: 'cart',
        component: Cart},

        {path:'/search',
        name:'search',
        component: Search},

       
        
      
              
    ]
})