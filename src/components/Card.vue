<template lang="pug">
.card
  .face.front(v-if="!card.flipped")
    .word
      span {{card.front.display}}
  .face.back(v-else)
    .word
      span {{card.back.display}}
  
</template>

<script>
import { mapState } from 'vuex'  
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
import { mapMutations } from 'vuex'

export default {
  name: 'Card',
  props: {
    card: {
      default: ()=>{}
    }
  },
  data(){
    return {
      
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
.card
  display flex
  flex-basis 100%
  background white
  border 1px solid rgba(0, 0, 0, .1)
  align-items center
  justify-content center
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)
  perspective 1000px
  transition .5s all
  
  &:hover
    transform: rotatex(-180deg);

  
  .face
    display flex
    flex-basis 100%
    align-items center
    justify-content center

    .word
      font-size 4em
      font-weight 400
      

  
</style>
