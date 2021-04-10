<template>
  <div id="app" :class="{ darktheme: darkmode }">
    <Header />
    <Content />
    <Footer />
  </div>
</template>

<script>

  import Header from './components/Header.vue'
  import Content from './components/Content.vue'
  import Footer from './components/Footer.vue'
  import {EventBus} from './eventBus.js'

export default {
  name: 'App',
  components: {
    Header,
    Content,
    Footer
  },
  created(){
    document.title = "S. Giannakis | Full Stack Developer"
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
