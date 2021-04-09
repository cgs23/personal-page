import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue'
import VueObserveVisibility from 'vue-observe-visibility'
import 'vue-awesome/icons'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/styles.css'
import './assets/animate.css'


import Icon from 'vue-awesome/components/Icon'
Vue.use(VueObserveVisibility)
Vue.component('v-icon', Icon);
Vue.use(BootstrapVue) ;
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
