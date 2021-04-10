<template>
  <div class="container-fluid pad text-right">
    <h2 :class="{gray: darkmode, purp: !darkmode}" >About me</h2>
    <h4>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      {{age}}
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
      setInterval(() => {
        this.calculateAge();
      }, 1000);
  },
  data(){
    return({
      darkmode: true,
      age: ''
    })
  },
  methods:{
    calculateAge(){
      let birthDate = new Date(1992, 2, 23, 14, 0, 0, 0, 0);
      let now = new Date();
      let dif = now - birthDate;
      let obj = this.convertDate(dif)
      return this.age = obj.y + ' years (' + obj.d + ' days and ' + obj.h+':'+obj.m +':'+obj.s+ ')';
      
    },
    convertDate(ms) {
      var years, days, hours, minutes, seconds, total_hours, total_minutes, total_seconds;
      
      total_seconds = parseInt(Math.floor(ms / 1000));
      total_minutes = parseInt(Math.floor(total_seconds / 60));
      total_hours = parseInt(Math.floor(total_minutes / 60));
      years = parseInt(Math.floor((total_hours / 24) / 365));
      days = (parseInt(Math.floor(total_hours / 24)) % 365) - (parseInt(years/4));

      seconds = parseInt(total_seconds % 60);
      seconds = seconds < 10  ? '0' + seconds.toString(): seconds;

      minutes = parseInt(total_minutes % 60);
      minutes = minutes < 10 ? '0' + minutes.toString(): minutes;

      hours = parseInt(total_hours % 24);
      hours = hours < 10 ? '0' + hours.toString(): hours;
      return {y: years, d: days, h: hours, m: minutes, s: seconds };
      
    }
  }
}
</script>

<style>

</style>