<template lang="pug">
div#app
  div.router-view-container
    transition(name="fade" mode='out-in')      
      router-view
</template>

<script>
import Navbar from "@/components/Navbar"
import { mapState } from 'vuex'

  
export default {
  components: {
    Navbar,
  },
  name: 'app',
  computed: {
    
  },
  created(){
    console.log("Welcome to Doko Doko Doko")
  },
}
</script>

<style lang="stylus">
@import "./styles/main.styl"

navbar-height = 60px

#app
  height 100%
  
  .router-view-container
    height 100%

    .page
       display flex
       flex-basis 100%

</style>
