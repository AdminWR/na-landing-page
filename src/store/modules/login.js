import axios from "axios"

export default{
    state:{
        user: [],
        isLogin: false
    },
    mutations: {
        isLoginUser(state){
            state.isLogin = true
        }
    },
    actions: {
        async loginSee({commit}, data){
            const res = await axios.post('https://api.na-promo.ru/login', data);
            commit('isLoginUser', state.user.push(res.data))
        }
    },
    getters: {
        
    }
}