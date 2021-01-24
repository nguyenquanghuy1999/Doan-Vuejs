import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/pages/Home'
import Detail from './components/pages/Detail'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/', component: Home},
        {
        path: '/detail/:id',
        name: 'ProductDetail',
        props: true,
        component: Detail
        }
        
      
        
        
              
    ]
})