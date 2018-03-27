import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Login from '../components/Login'
import Signup from '../components/Signup'
import Forum from '../components/Forum'
import Logout from '../components/Logout'
import Read from '../components/Read'
import Create from '../components/Create'
import CreateCategory from '../components/category/CreateCategory'

const routes = [
     { path: '/login', component: Login },
     { path: '/logout', component: Logout },
     { path: '/signup', component: Signup},
     { path: '/ask', component: Create},
     { path: '/category', component: CreateCategory},
     { path: '/forum', component: Forum, name: 'forum'},
     { path: '/question/:slug', component: Read, name: 'read'}
]

const router = new VueRouter({
  routes, // short for `routes: routes`
  mode : 'history'
})

export default router