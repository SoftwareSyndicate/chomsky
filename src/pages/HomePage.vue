<template lang="pug">
#home-page()
  h1 Decks 
  .deck-list
    .deck(v-for="deck in decks" @click="selectDeck(deck)")
      .top
        span.name {{deck.name}}
      .bottom
        .info.card-count
          span.label Card Count:
          span.value {{deck.words.length}}
        .info.language  
          span.label Language:
          span.value {{deck.language}}
        .info.difficulty
          span.label Difficulty:
          span.value {{deck.difficulty}}

      
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  name: 'HomePage',
  components: {

  },
  data(){
    return {
      
    }
  },
  methods: {
    ...mapMutations({
      updateConfig: 'cards/update_config',
    }),
    selectDeck(deck){
      let config = {
        decks: [deck.name],
        lang: 'ja'
      }
      this.updateConfig(config)
      log("going")
      this.$router.push({name: "deck"})
    }
  },
  computed: {
    ...mapGetters({
      decks: "cards/decks",
    })
  },
  created(){

  },
  mounted(){

    
  },
}
</script>


<style lang="stylus" scoped>
@import "../styles/main.styl"

#home-page
  display flex
  flex-wrap wrap
  padding 2em
  
  h1
    flex-basis 100%
    margin-bottom 2em
    
  .deck-list
    display flex
    flex-grow 1
    padding 1em
    
    .deck
      display flex
      flex-wrap wrap
      background white
      border 1px solid rgba(0, 0, 0, .08)
      padding 1em
      margin 1em
      box-shadow: 0 1px 3px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.13)
      flex-grow 1
      cursor pointer
      transition all .3s

      &:hover
        box-shadow: 0 3px 6px rgba(0,0,0,0.13), 0 3px 6px rgba(0,0,0,0.20)
      
      .top
        display flex
        flex-basis 100%
        padding-bottom 1.5em
        
        .name
          font-weight 400
          font-size 2.3em
          
      .bottom
        display flex
        flex-wrap wrap
        flex-basis 100%
        .info
          display flex
          flex-basis 100%
          justify-content space-between
          margin-bottom .3em
        span
          font-size 1.3em
          
</style>
