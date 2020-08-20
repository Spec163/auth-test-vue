import Vue from 'vue';
import Router from 'vue-router';
import Login from '../components/auth/Login'
import Registration from '../components/auth/Registration'
import store from '../store/index'


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
            path: '/imitator',
            name: 'imitator',
            component: () => import('../components/billing/Imitator')
        },
        {
            path: '/crm/user-list',
            name: 'user-list',

            // ужас
            beforeEnter(to, from, next) {
                if (store.getters.IS_ADMIN_ROLE) {
                    next()
                } else {
                    console.warn('У ВАС НЕДОСТАТОЧНО ПРАВ!!!')
                    next('profile')
                }
            },

            component: () => import('../components/crm/UserList')
        },
        {
            path: '/profile/tariff',
            name: 'tariff',
            // lazy-loaded
            component: () => import('../components/tariff/TariffList')
        },

    ]
});
