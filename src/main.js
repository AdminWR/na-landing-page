import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.config.productionTip = false
// Your web app's Firebase configuration
const firebaseConfig = {

};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
