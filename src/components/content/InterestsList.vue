<template>
  <div class="container-fluid pad text-right">
    <h2 :class="{gray: darkmode, purp: !darkmode}">Interests!</h2>
    <h4>While developing stuff and looking into new things to learn is one of my biggest passions, well.. <br>
      there are other things that get me pumped and help me get through life. <br> Here are some of them!
    </h4>
    <ol>
	<li>Sports (#COYS)</li>
	<li>Videogames, with a little extra love for the Legend of Zelda series.</li>
	<li>Cocktails & Mixology (worked as a bartender for almost 7 years!)</li>
  <li>Cooking and trying new cuisines.</li>
  <li>Music - Hiphop-head for almost 20 years, member of the legendary* Sigma Pi band as a DJ & turntablist. <span class="terms">* terms and conditions apply</span> </li>
  <li>Traveling and exploring new places around the globe </li>
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

.terms{
  font-size: 10px;
}

</style>