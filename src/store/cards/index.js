import Vue from 'vue'
import decks from '@/decks'
import APIs from '../apis/'


// State
const state = {
  decks: decks,
  deck: [],
  graveyard: [],
  card: null,
  config: {
    lang: 'ja',
    decks: ['colors', 'numbers']
  }
}

// Getters
var getters = {
  decks: state => state.decks,
  deck: state => state.deck,
  graveyard: state => state.graveyard,
  card: state => state.deck[0],
}

// Mutations
var mutations = {
  ['update_deck'](state, deck){
    log(deck)
    state.deck = deck
  },
  ['update_config'](state, config){
    state.config = Object.assign({}, state.config, config)
  },
  ["flip_card"] (state) {
    state.deck[0].flipped = !state.deck[0].flipped
  },
  ["next_card"] (state) {
    log("next card")
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
    // Just select numbers deck for now
    let deck = decks[state.config.decks[0]]
    let promises = []
    let cards = []
    
    deck.words.forEach(word => {
      promises.push(Vue.http.get("https://us-central1-dokodokodoko-511dc.cloudfunctions.net/functionsAPI/translate/" + state.config.lang + "?text=" + word).then(response => {
        let card = {
          flipped: false,
          front: {
            lang: deck.lang,
            word: word,
          },
          back: {
            lang: state.config.lang,
            word: response.body.translatedText
          }
        }

        cards.push(card)
      }, error => {
        throw error
      }))
    })

    return Promise.all(promises).then(()=> {
      commit("update_deck", cards)
      return cards
    })
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
