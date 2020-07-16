import Vue from 'vue';
import Router from 'vue-router';
import Login from '../components/auth/Login'
import Register from '../components/auth/Register'


Vue.use(Router);

export const router = new Router({
    mode: 'history',
    routes: [
/*        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/home',
            component: Home
        },*/
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/register',
            component: Register
        },
        {
            path: '/profile',
            name: 'profile',
            // lazy-loaded
            component: () => import('../components/auth/Profile')
        },
        // {
        //     path: '/admin',
        //     name: 'admin',
        //     // lazy-loaded
        //     component: () => import('./views/BoardAdmin.vue')
        // },
    ]
});

