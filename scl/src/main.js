// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueI18n from 'vue-i18n'
import enLocal from './language/en'
import cnLocal from './language/cn'
Vue.config.productionTip = false
/* eslint-disable no-new */
Vue.use(VueI18n)
Vue.use(ElementUI)

const i18n = new VueI18n({
  locale: 'en',
  messages: {
    'en': enLocal,
    'cn': cnLocal
  }
})
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  template: '<App/>',
  components: { App }
})
