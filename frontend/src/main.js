import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import TopBarInMainVue from './components/TopBarInMain.vue';

Vue.config.productionTip = false
Vue.component('top-bar-main', TopBarInMainVue);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
