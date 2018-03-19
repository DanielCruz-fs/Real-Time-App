import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Login from '../components/Login'
import Signup from '../components/Signup'
import Forum from '../components/Forum'
import Logout from '../components/Logout'

const routes = [
     { path: '/login', component: Login },
     { path: '/logout', component: Logout },
     { path: '/signup', component: Signup},
     { path: '/forum', component: Forum, name: 'forum'}
]

const router = new VueRouter({
  routes, // short for `routes: routes`
  mode : 'history'
})

export default router