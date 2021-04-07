import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '../components/Dashboard.vue';
import Home from '../views/Home.vue';
import Exercise from '../components/Exercise.vue';
import Friends from '../components/Friends.vue';
import AdminLogin from '../views/AdminLogin.vue';
import AdminHome from '../views/AdminHome.vue';
import userList from '../components/userList.vue';
//import Session from "../models/Session";

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home },
  {path: '/dashboard', name: 'Dashboard', component: Dashboard},
  {path: '/exercise', name: 'Exercise', component: Exercise},
  {path: '/friends', name: 'Friends', component: Friends},
  {
    path: '/admin',
    name: "AdminLogin",
    component: AdminLogin
  },
  {
    path: '/adminhome',
    name: "AdminHome",
    component: AdminHome
  },
  {
    path: '/userList',
    name: "userList",
    component: userList
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach( (to, from, next) =>{
//     console.log({ from, to })
//     if(to.path == '/dashboard' && !Session.userData){
//     next('/');
//     }else{
//       next('/dashboard');
//     }
// } )

export default router
