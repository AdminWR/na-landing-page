import Vue from 'vue';
import Vuelidate  from 'vuelidate';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import firebase from 'firebase/app';
import 'firebase/firestore';
import router from './router';
import store from './store';

Vue.use(Vuelidate)
Vue.config.productionTip = false
// Your web app's Firebase configuration

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
