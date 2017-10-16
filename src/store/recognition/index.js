import Recognition from '../apis/recognition'

window.recognition = Recognition

// State
const state = {
  listening: false,
  result: null,
}

// Getters
var getters = {
  first_name: state =>  state.first_name,
  last_name: state =>  state.last_name,
}

// Mutations
var mutations = {
  ["UPDATE_FIRST_NAME"] (state, first_name) {
    state.first_name = first_name
  },
}

// Actions
var actions = {
  load_user: ({ commit, state }) => {
    let user = localStorage.getItem("user");
    if(user){
      commit("LOAD_USER", JSON.parse(user))
    }
  },
  save_user: ({ commit, state }) => {
    let user = JSON.stringify(state)
    localStorage.setItem("user", user)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
