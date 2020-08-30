import Vue from 'vue';
import Router from 'vue-router';
import Login from '../components/auth/Login'
import Registration from '../components/auth/Registration'
import store from '../store/index'


Vue.use(Router);

// реализовать beforeEnter для всего
export const router = new Router({
    mode: 'history',
    routes: [
        {
            // 404
            path: '*',
            name: 'NotFound',
            redirect: 'profile',

            beforeEnter(to, from, next) {
                if (store.getters.GET_USER_IS_ACTIVE) {
                    next('profile')
                } else {
                    console.warn('Вам необходимо авторизоваться!')
                    next('login')
                }
            },
        },
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
            component: () => import('../components/auth/Profile'),

            beforeEnter(to, from, next) {
                if (store.getters.GET_USER_IS_ACTIVE) {
                    next()
                } else {
                    console.warn('Вам необходимо авторизоваться!')
                    next('login')
                }
            },
        },
        {
            path: '/imitator',
            name: 'imitator',
            // lazy-loaded
            component: () => import('../components/billing/Imitator'),

            beforeEnter(to, from, next) {
                if (store.getters.GET_USER_IS_ACTIVE) {
                    next()
                } else {
                    console.warn('Вам необходимо авторизоваться!')
                    next('login')
                }
            },
        },
        {
            path: '/crm/user-list',
            name: 'user-list',
            component: () => import('../components/crm/UserList'),


            // ужас
            beforeEnter(to, from, next) {
                if (store.getters.GET_USER_IS_ACTIVE) {
                    if (store.getters.IS_ADMIN_ROLE) {
                        next()
                    } else {
                        console.warn('У ВАС НЕДОСТАТОЧНО ПРАВ!!!')
                        next('profile')
                    }
                } else {
                    console.warn('Вам необходимо авторизоваться!')
                    next('login')
                }
            },
        },
        {
            path: '/profile/tariff',
            name: 'tariff',
            component: () => import('../components/tariff/TariffList'),

            beforeEnter(to, from, next) {
                if (store.getters.GET_USER_IS_ACTIVE) {
                    next()
                } else {
                    console.warn('Вам необходимо авторизоваться!')
                    next('login')
                }
            },
        },

    ]
});
