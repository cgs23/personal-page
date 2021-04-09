<template>
  <a :class="{social: darkmode}" :href="value" target="_blank"><v-icon :name="icon" scale="2.5" :title='platform' /></a>
</template>

<script>
import {EventBus} from '../../eventBus.js'

export default {
    name: 'Social',
    props: [
        'platform',
        'value',
        'icon'
    ],
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

<style scoped>

a{
    color:#6665ee !important;
}


</style>