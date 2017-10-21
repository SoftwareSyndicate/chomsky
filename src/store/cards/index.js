import commonWords from '../apis/common'
import APIs from '../apis/'

// State
const state = {
  deck: [],
  graveyard: [],
  card: null
}

// Getters
var getters = {
  deck: state => state.deck,
  graveyard: state => state.graveyard,
  card: state => state.deck[0],
}

// Mutations
var mutations = {
  ["flip_card"] (state) {
    state.deck[0].flipped = !state.deck[0].flipped
  },
  ["next_card"] (state) {
    let card = state.deck.shift()
    state.graveyard.unshift(card)
  },
  ["previous_card"] (state) {
    let card = state.graveyard.shift()
    state.deck.unshift(card)
  },
}

// Actions
var actions = {
  build_deck: ({ commit, state }) => {
    let cards = [
      {
        flipped: false,
        front: {
          word: "Hello",
        },
        back: {
          word: "こんにちは",
        }
      },
      {
        flipped: false,
        front: {
          word: "Yes",
        },
        back: {
          word: "はい",
        }
      },
      {
        flipped: false,
        front: {
          word: "No",
        },
        back: {
          word: "いいえ",
        }
      }
    ]
    // commonWords.forEach(w => {
    //   let card = {
    //     visible: false,
    //     flipped: false,
    //     front: {
    //       word: w,
    //       display: w
    //     },
    //     back: {
    //       word:"こんにちは",
    //       display: "こんにちは",
    //     }
    //   }
    // })

    state.deck = cards
    return state.deck
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
