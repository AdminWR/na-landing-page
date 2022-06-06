import axios from "axios"

export default{
    state:{
        user: {}
    },
    mutations: {
        
    },
    actions: {
        async loginSee(ctx, state){
            const res = await axios.get('http://localhost:8080/login');
            state.user = res.data;
            console.log(state.user);
        }
    },
    getters: {
        
    }
}