import Vue from 'vue'
import VueRouter from 'vue-router'
import Master from './components/layouts/Master.vue'


Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/', components: Master},
        
    ]
})