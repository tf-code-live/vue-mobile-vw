import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views'
import Login from '../views/login'

Vue.use(VueRouter)

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/',
        name: 'HomePage',
        component: Home,
        redirect: '/home',
        children: [
            {
                path: 'home',
                name: 'Home',
                component: () => import(/* webpackChunkName: "home" */ '../views/home')
            },
            {
                path: 'search',
                name: 'Search',
                component: () => import(/* webpackChunkName: "search" */ '../views/search')
            },
            {
                path: 'profile',
                name: 'Profile',
                component: () => import(/* webpackChunkName: "profile" */ '../views/profile')
            }
        ]
    }
]

const router = new VueRouter({
    routes
})

export default router
