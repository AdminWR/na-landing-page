import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: () => import('./Pages/Main')
    },
    {
        path: '/registration',
        component: () => import('./Pages/Auth')
    },
    {
        path: '/login',
        component: () => import('./Pages/Login')
    }
]

export default new VueRouter({
    mode: 'history',
    routes
});