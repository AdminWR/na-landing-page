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
            const res = await axios.post('http://localhost:3000/login', data);
            commit('isLoginUser', state.user.push(res.data))
        }
    },
    getters: {
        
    }
}