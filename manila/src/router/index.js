import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/Login'
import GameHall from '@/components/GameHall'
import GameRoom from '@/components/GameRoom'
import GamePlay from '@/components/GamePlay'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/game_hall',
      name: 'GameHall',
      component: GameHall
    },
    {
      path: '/game_room',
      name: 'GameRoom',
      component: GameRoom
    },
    {
      path: '/game_play',
      name: 'GamePlay',
      component: GamePlay
    }
  ]
})
