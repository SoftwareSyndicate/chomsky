// State
const state = {
  brand: "Doko Doko Doko",
}

// Getters
var getters = {
  brand: (state, commit, rootState) => state.brand,
}

// Mutations
var mutations = {
  ["SET_BRAND"] (state, brand) {
    state.brand = brand
  },
}

// Actions
var actions = {
  
}

export default {
  state,
  getters,
  mutations,
  actions
}
