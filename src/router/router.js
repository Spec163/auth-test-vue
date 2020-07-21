import Vue from 'vue';
import Router from 'vue-router';
import Login from '../components/auth/Login'
import Registration from '../components/auth/Registration'


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
            path: '/registration',
            name: 'registration',
            component: Registration
        },
        {
            path: '/profile',
            name: 'profile',
            // lazy-loaded
            component: () => import('../components/auth/Profile')
        },
        {
            path: '/billing/call',
            name: 'call',
            component: () => import('../components/billing/Call')
        },

        // {
        //     path: '/admin',
        //     name: 'admin',
        //     // lazy-loaded
        //     component: () => import('./views/BoardAdmin.vue')
        // },
    ]
});

