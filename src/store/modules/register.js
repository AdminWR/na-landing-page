import Vuex from 'vuex';
import axios from "axios"

export default{
    state:{
        user: []
    },
    actions: {
        async register({commit}, data){ 
            let res = await axios.post('https://api.na-promo.ru/register', data)
            let recordUser = await res.json();
            await commit('addUser', recordUser)
        }
    },
    mutations: {
        addUser(state, item){
            state.user.unshift(item)
        }
    },
    getters: {
        fullUsers(state){
            return  console.log(state.user); 
        }
    },
}