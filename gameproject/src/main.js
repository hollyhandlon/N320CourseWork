import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Start from './components/Start.vue'
import Board from './components/GameBoard.vue'

Vue.config.productionTip = false


Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', component: Start },
    { path: '/board', component: Board }
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
