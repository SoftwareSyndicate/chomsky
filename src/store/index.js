import Vue from 'vue'
import Vuex from 'vuex'

import users from './users'
import cards from './cards'
import recognition from './recognition'

import components from './components'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    users: users,
    cards: cards,
    recognition: recognition,
    
    // Components
    navbar: components.Navbar,
  }
})

export default store
