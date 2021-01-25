import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/pages/Home'
import Detail from './components/pages/Detail'
import Types from './components/pages/Types'
import Cart from './components/pages/Cart'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/', component: Home},

        {path: '/detail/:id',component: Detail},
        
        {path: '/types/:id', component: Types},

        {path:'/cart', component: Cart}

        
      
        
        
              
    ]
})