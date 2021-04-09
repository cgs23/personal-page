<template>
  <div class="foot">
      2021 · Made by Stavros with <span id='heart'>❤</span>
  </div>
</template>

<script>
  //import { EventBus } from '..eventBus.js'

export default {
    name: 'Footer'

}
</script>

<style>
    .foot{
        border-top: solid;
        border-bottom: none;
        border-color: #232323;
        background-color: #111;
        position: relative;
        width:100%;
        bottom:0;
        
        text-align: center;
        height: 35px;
        align-content: center;
        padding: 4px;
    }

    #heart{
        color:red
    }
</style>