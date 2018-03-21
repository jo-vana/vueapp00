import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SingleMovie from '@/components/SingleMovie'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/movie/:id',
      name: 'movie',
      component: SingleMovie,
      props: true
    }
  ]
})
