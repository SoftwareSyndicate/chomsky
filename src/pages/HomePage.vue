<template lang="pug">
#home-page
  .card-list-container
    card-list(:cards="deck")
  
</template>

<script>
import CardList from '@/components/CardList'  
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'HomePage',
  components: {
    CardList
  },
  data(){
    return {

    }
  },
  methods: {
    ...mapActions({
      buildDeck: 'cards/build_deck'
    })
  },
  computed: {
    ...mapGetters({
      deck: "cards/deck"
    })
  },
  created(){
    this.buildDeck()
  },
  mounted(){

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

  .card-list-container
    display flex
    flex-basis 100%
    
  
</style>
