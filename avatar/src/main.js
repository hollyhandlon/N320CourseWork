import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Map from './components/Map.vue'
import Characters from './components/Characters.vue'
import Start from './components/Start.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', component: Start },
    { path: '/characters', component: Characters },
    { path: '/map', component: Map }

  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
