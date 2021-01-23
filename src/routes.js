import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/pages/Home'
import Detail from './components/pages/Detail'


Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/', component: Home},
        // {path: '/productdetail', component: ProductDetail},

        {path: '/detail/:id',
        name: 'ProductDetail',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Detail}
        
      
        
        
              
    ]
})