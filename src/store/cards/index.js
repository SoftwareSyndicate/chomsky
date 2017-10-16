import commonWords from '../apis/common'
import APIs from '../apis/'

// State
const state = {
  deck: [
    {
      visible: true,
      flipped: false,
      front: {
        display: "Hello"
      },
      back: {
        display: "Back"
      }
    },
    {
      visible: false,
      flipped: false,
      front: {
        display: "World"
      },
      back: {
        display: "Back"
      }
    }
  ],
}

// Getters
var getters = {
  deck: state => state.deck,
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
          word: w
        },
        back: {
          word: "Back"
        }
      }

      // APIs.Jisho.get_word(w).then(results => {
        
      // })
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
