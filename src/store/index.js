import Vue from 'vue'
import Vuex from 'vuex'
import { Notify } from 'quasar'
// import example from './module-example'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

Vue.prototype.$show = (msg, color) => {
  Notify.create({
    message: msg,
    color: color,
    timeout: 2000,
    actions: [{ icon: 'close', color: 'white' }]
  })
}

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      // example
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  return Store
}
