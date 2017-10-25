<template lang="pug">
#deck-page(:class="{'listening': listening, 'success': success, 'fail': fail}")
  span.said(v-if="!deck.length") Loading Deck
  span.said(v-if="speachResult") {{speachResult}}
  .deck-container(@click="toggleSpeech()" v-if="deck.length")
    deck(:cards="deck")

</template>

<script>
import Deck from '@/components/Deck'  
// import Recognition from '@/store/recognition'  
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  name: 'DeckPage',
  components: {
    Deck
  },
  data(){
    return {
      listening: false,
      success: false,
      fail: false,
      speachResult: null
    }
  },
  methods: {
    ...mapActions({
      buildDeck: 'cards/build_deck',
    }),
    ...mapMutations({
      flipCard: 'cards/flip_card',
      nextCard: 'cards/next_card',
      updateDeck: 'cards/update_deck',
    }),
    pronounce(){
      // TODO
    },
    onStart(e){
      this.speachResult = null
      this.listening = true
      log("on Start", e)
      this.success = false
      this.fail = false
    },
    onEnd(e){
      this.listening = false
      log("on End", e)
    },
    onError(e){
      log("on Error", e)
    },
    onNoResult(e){
      log("on noResult", e)
    },
    onResult(e){
      let result = e.results[0][0].transcript
      this.speachResult = result
      log("on Result: ", result)

      // First Check if it's a special word ('help', 'say', 'skip')
      switch (result){
      case "助けて":
        this.flipCard()
        // this.pronounce() TODO

        setTimeout(()=>{
          if(!this.listening){
            this.toggleSpeech()
          }
        }, 1000)

        break
      case "次":
        this.nextCard()
      case "発音する":
        // this.pronounce()
        break
      case this.card.back.word:
        this.onSuccess()
        break
      default:
        this.fail = true
        break
      }
    },
    onSuccess(){
      this.success = true
      this.flipCard()
      setTimeout(()=>{
        this.nextCard()
        this.toggleSpeech()
      }, 1500)
    },
    toggleSpeech(){
      if(this.listening){
        this.recognition.stop()
        this.listening = false
      } else {
        this.recognition.start()
        this.listening = true
      }
    }
    
  },
  computed: {
    ...mapGetters({
      deck: "cards/deck",
      card: "cards/card"
    })
  },
  created(){
    this.buildDeck().then(()=>{
      this.toggleSpeech()
    })
  },
  mounted(){
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
    var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

    this.recognition = new SpeechRecognition()
    this.recognition.continuous = false
    // this.recognition.lang = 'en-US'
    this.recognition.lang = 'ja-JP'
    this.recognition.interimResults = false
    this.recognition.maxAlternatives = 1
    this.recognition.onstart = this.onStart.bind(this)
    this.recognition.onend = this.onEnd.bind(this)
    this.recognition.onerror = this.onError.bind(this)
    this.recognition.onnoresult = this.onNoResult.bind(this)
    this.recognition.onresult = this.onResult.bind(this)
  },
  beforeDestroy(){
    this.recognition.stop()
    this.updateDeck([])
  }
}
</script>


<style lang="stylus" scoped>
@import "../styles/main.styl"

#deck-page
  display flex
  flex-basis 100%
  align-items center
  justify-content center
  height 100%
  flex-wrap wrap

  &.listening
    background: radial-gradient(rgba(155, 89, 182, .7)  0%, transparent 45%, #f9fafd 55%)
  &.success
    background: radial-gradient(rgba(46, 204, 113, .7)  0%, transparent 45%, #f9fafd 55%)
  &.fail
    background: radial-gradient(rgba(231, 76, 60, .7)  0%, transparent 45%, #f9fafd 55%)
  
  .deck-container
    display flex
    flex-basis 100%

  .said
    display flex
    position fixed
    top 15%
    font-size 2em
    z-index 2
     
  
</style>
