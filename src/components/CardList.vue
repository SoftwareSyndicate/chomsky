<template lang="pug">
.card-list
  .card-container(v-for="card in cards" v-if="card.visible")
    card(:card="card")

</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
import Card from '@/components/Card'

export default {
  name: 'CardList',
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
.card-list
  display flex
  flex-basis 100%
  align-items center
  justify-content center

  .card-container
    display flex
    flex-basis 40%
    height 250px
  
  
</style>
