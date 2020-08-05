import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7cc22b3c = () => interopDefault(import('..\\node_modules\\@nuxt\\content-theme-docs\\src\\pages\\releases.vue' /* webpackChunkName: "pages/releases" */))
const _1b831aca = () => interopDefault(import('..\\node_modules\\@nuxt\\content-theme-docs\\src\\pages\\_slug.vue' /* webpackChunkName: "pages/_slug" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/releases",
    component: _7cc22b3c,
    name: "releases___en"
  }, {
    path: "/:slug?",
    component: _1b831aca,
    name: "slug___en"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
