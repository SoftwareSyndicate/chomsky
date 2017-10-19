<template lang="pug">
.deck
  .card-container
    card(:card="cards[0]")

</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
import Card from '@/components/Card'

export default {
  name: 'Deck',
  components: {
    Card
  },
  props: {
    cards: {
      default: ()=>[]
    }
  },
  methods: {
    ...mapMutations([

    ]),
    ...mapActions([

    ]),
  },

  computed: {
    ...mapGetters([

    ]),
    ...mapState({

    })
  },

  mounted(){
    
  }
}
</script>


<style lang="stylus">
.deck
  display flex
  flex-basis 100%
  align-items center
  justify-content center

  .card-container
    display flex
    flex-basis 40%
    height 250px
  
  
</style>
