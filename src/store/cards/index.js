import commonWords from '../apis/common'
import APIs from '../apis/'

// State
const state = {
  deck: [
    {
      flipped: false,
      front: {
        word: "Hello",
        display: "Hello"
      },
      back: {
        word: "こんにちは",
        display: "こんにちは"
      }
    },
    {
      flipped: false,
      front: {
        display: "World"
      },
      back: {
        display: "Back"
      }
    }
  ],
  card: null
}

// Getters
var getters = {
  deck: state => state.deck,
  card: state => state.deck[0],
}

// Mutations
var mutations = {
  ["UPDATE_FIAT"] (state, base_fiat) {
    state.base_fiat = base_fiat
  },
}

// Actions
var actions = {
  build_deck: ({ commit, state }) => {
    let cards = []
    commonWords.forEach(w => {
      let card = {
        visible: false,
        flipped: false,
        front: {
          word: w,
          display: w
        },
        back: {
          word:"こんにちは",
          display: "こんにちは",
        }
      }
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
