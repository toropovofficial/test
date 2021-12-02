import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../../components/mainpage/home.vue'
import store from '../../store/index'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: home
    },
    {
      path: '/search',
      component: () => import('../../components/searchPage/index.vue'),
      name: 'search'
    },
    {
      path: '/playlist',
      component: () => import('../../components/myPlaylist/main.vue'),
      beforeEnter: (to, from, next) => {
        if ((store.state as any).generalTrackList.auth) {
          alert('проходите')
          next()
        } else {
          alert('нужно зарегистрироваться')
          next({ path: '/' })
        }
      }
    },
    {
      path: '/pop',
      component: () => import('../../components/genre/index.vue')
    },
    {
      path: '/rock',
      component: () => import('../../components/genre/index.vue')
    },
    {
      path: '/jazz',
      component: () => import('../../components/genre/index.vue')
    },
    {
      path: '/rap',
      component: () => import('../../components/genre/index.vue')
    },
    {
      path: '*',
      component: () => import('../../components/notFound/notFoundPage.vue')
    },
    {
      path: '/tes',
      component: () => import('../../components/myPlaylist/tes.vue')
    }
  ]
})

export default router
