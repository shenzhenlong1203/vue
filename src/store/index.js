import Vue from 'vue'
import vuex from 'vuex'
import dialogStore from './modules/dialog_store.js'

Vue.use(vuex)

export default new vuex.Store({
  modules: {
    dialog: dialogStore
  }
})
