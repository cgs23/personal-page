<template>
  <div class="container-fluid pad text-right">
    <h2 :class="{gray: darkmode, purp: !darkmode}" >A little bit about me</h2>
    <h4>My name is Stavros Giannakis, I am {{age}} old, currently living in Athens, Greece. <br> 
        I have a Bachelor & Master's degree in Computer Science, having graduated from the National and Kapodistrian University of Athens, Department of Informatics and Telecommunications. <br>
        I am a software engineer with 2+ years of work experience in a variety of development frameworks. Furthermore, I possess a sound understanding of Machine Learning aspects,
        participating in a research team that engages with problems related with textual data. <br>
        Always enthusiastic and eager to learn new technologies and expand the existing arsenal of development tools. <br>
        Currently, I am working as a full stack developer (.NET / Angular / Vue / MSSQL) in the financial sector.
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