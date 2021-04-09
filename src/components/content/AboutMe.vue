<template>
  <div class="container-fluid pad text-right">
    <h2 :class="{gray: darkmode, purp: !darkmode}" >About me</h2>
    <h4>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    </h4>
  </div>
</template>

<script>
import {EventBus} from '../../eventBus.js'

export default {
    name: 'AboutMe',
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