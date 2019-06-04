import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import i18n from '@/plugins/i18n';
import './plugins/vue-flag'

Vue.config.productionTip = false

new Vue({
    i18n,
    render: h => h(App),
}).$mount('#app')
