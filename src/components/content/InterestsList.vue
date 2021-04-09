<template>
  <div class="container-fluid pad text-right">
    <h2 :class="{gray: darkmode, purp: !darkmode}">Interests!</h2>
    <h4>While developing and looking into new things to learn is one of my biggest passions, well.. <br>
      there are other things that get me pumped, blabla. <br> Here are some of them 👻
    </h4>
    <ol>
	<li>Item 1</li>
	<li>Videogames</li>
	<li>Cocktails & Mixology (worked as a bartender for almost 7 years)</li>
</ol>
  </div>
</template>

<script>

import {EventBus} from '../../eventBus.js'
export default {
    name: 'InterestsList',
    components:{
        
    },
  created(){
    EventBus.$on('dark-mode', (val) => {
      this.darkmode=val;
      });
  },
    data(){
        return{
            darkmode: true
        }
    }

}
</script>

<style>
ol {
  list-style-type: none;
  counter-reset: li;
}

li {
  font-size: 1.5rem;
  padding-right:0.5em;
}

li:before {
  counter-increment: li;
  content: counter(li, decimal-leading-zero);
  color: #6665ee;
  margin-right: 0.15em;
}
</style>