import Vue from 'vue'
import Router from 'vue-router'
// import hello from '@/components/HelloWorld'
import home from '@/components/Home.vue'
import login from '@/components/Login.vue'

Vue.use(Router)

const routes = [
  // {
  //   path: '/',
  //   component: hello
  // },
  {
    path: '/home',
    component: home
  },
  {
    path: '/',
    component: login
  }
]

const router = new Router({
  routes
})
export default router

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })
