<template lang="pug">
#home-page(:class="{'listening': listening}")
  .deck-container(@click="toggleSpeech()")
    deck(:cards="deck")

</template>

<script>
import Deck from '@/components/Deck'  
// import Recognition from '@/store/recognition'  
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'HomePage',
  components: {
    Deck
  },
  data(){
    return {
      listening: false
    }
  },
  methods: {
    ...mapActions({
      buildDeck: 'cards/build_deck'
    }),
    onStart(e){
      this.listening = true
      log("on Start", e)
    },
    onEnd(e){
      this.listening = false
      log("on End", e)
    },
    onResult(e){
      log("on Result")
      let result = e.results[0][0].transcript
      if(result == this.card.back.word){
        log("MATCH!!!!!!!!!!!!!!!!!!!")
      }
    },
    onError(e){
      log("on Error", e)
    },
    onNoResult(e){
      log("on noResult", e)
    },
    
    toggleSpeech(){
      log("TOLL")
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
    // this.buildDeck() TODO generate deck from json file of words
  },
  mounted(){
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
    var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

    this.recognition = new SpeechRecognition()
    this.recognition.continuous = false
    // this.recognition.lang = 'en-US'
    this.recognition.lang = 'ja-JP'
    // this.recognition.interimResults = true
    this.recognition.maxAlternatives = 1
    this.recognition.onstart = this.onStart.bind(this)
    this.recognition.onend = this.onEnd.bind(this)
    this.recognition.onerror = this.onError.bind(this)
    this.recognition.onnoresult = this.onNoResult.bind(this)
    this.recognition.onresult = this.onResult.bind(this)

    
  },
}
</script>


<style lang="stylus" scoped>
@import "../styles/main.styl"

#home-page
  display flex
  flex-basis 100%
  align-items center
  justify-content center
  height 100%
  flex-wrap wrap

  &.listening
    background: radial-gradient(rgba(231, 76, 60,1.0)  0%, transparent 40%, #f9fafd 50%)
  
  .deck-container
    display flex
    flex-basis 100%

        
  
</style>
