import Vue from 'vue';
import Vuex from 'vuex';
import loginSee from './modules/login';
import register from './modules/register'

Vue.use(Vuex);


export default new Vuex.Store({
    modules:{
        loginSee,
        register
    }
})