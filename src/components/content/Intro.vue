<template>
  <div class="container-fluid pad text-left">
      <h2 :class="{gray: darkmode, purp: !darkmode}">Hello there! 👋🏼</h2>
      <h3>I'm Stavros.</h3>
      <h4>Welcome to my personal page!</h4>
  </div>
</template>

<script>
import {EventBus} from '../../eventBus.js'

export default {
    name: 'Intro',
  created(){
    EventBus.$on('dark-mode', (val) => {
      this.darkmode=val;
      });
  },
  data(){
    return({
      darkmode: true,
    })
  }
}
</script>

<style>

</style>