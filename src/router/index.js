import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '@/views/Dashboard'
import Login from '@/views/Login'
import Error404 from '@/views/Error404'


const isAuthenticated = function () {
  return window.sessionStorage.access_token
}

Vue.use(VueRouter)


const router = new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
      beforeRouteEnter(to, from, next) {
        if (isAuthenticated()) {
          next()
        }
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: { isPublic: true },
      beforeRouteEnter() {
        localStorage.clear()
      }
    },
    {
      path: '*',
      name: '404NotFound',
      component: Error404,
      meta: { isPublic: true },
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (!to.meta.isPublic && !isAuthenticated()) {
    return next({ name: 'Login' })
  }

  if (to.name === 'Login' && isAuthenticated()) {
    return next({ name: 'Dashboard' })
  }

  return next()
})


export default router