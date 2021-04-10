<template>
  <div :class="{'foot-light': !darkmode, 'foot-dark': darkmode}" class='foot'>
      2021 · Made by Stavros with <span id='heart'>❤</span>
  </div>
</template>

<script>
import { EventBus } from '../eventBus.js'

export default {
    name: 'Footer',
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
    .foot{
        border-top: solid;
        border-bottom: none;
        position: relative;
        width:100%;
        bottom:0;
        text-align: center;
        height: 35px;
        align-content: center;
        padding: 4px;
        border-top-width: 1px;
    }
    #heart{
        color:red
    }

    .foot-dark{
        border-color: #232323;
        background-color: #111;
    }
    
    .foot-light{
        border-color:#232323;
        background-color: #fff;
        
    }

</style>