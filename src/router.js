import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: "Main",
        component: () => import('./Pages/Main')
    },
    {
        path: '/registration',
        name: "Registration",
        component: () => import('./Pages/Registration')
    },
    {
        path: '/login',
        name: "Login",
        component: () => import('./Pages/Login')
    }
]

export default new VueRouter({
    mode: 'history',
    routes
});