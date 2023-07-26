<template>
  <div class="container-fluid pad">
      <h3 class="pad-down">Wanna get in touch? Hit me up! 🥳</h3>
      <span v-for='item in contactVar' :key='item.platform'>
          <Social :icon='item.icon' :value='item.value' :platform='item.platform'/>
          <div class="divider"></div>
      </span>
  </div>
</template>

<script>
import Social from './Social.vue'
export default {
    name: 'Contact',
    components:{
      Social
    },
    data(){
      return(
        {
          contactVar: [
        {
            "platform": "Linkedin",
            "value": "https://www.linkedin.com/in/stavros-giannakis/",
            "icon": "brands/linkedin-in"
        },
        {
            "platform": "Instagram",
            "value": "https://www.instagram.com/cgs23",
            "icon": "brands/instagram"

        },
        {
            "platform": "Facebook",
            "value": "https://www.facebook.com/cgs23",
            "icon": "brands/facebook-f"

        },
        {
            "platform": "Github",
            "value": "https://github.com/cgs23/",
            "icon": "brands/github"

        },
        {
            "platform": "Twitter",
            "value": "https://www.twitter.com/sgiannakis23",
            "icon": "brands/twitter"

        },
        {
            "platform": "Email",
            "value": "mailto:stavrgiannakis@gmail.com",
            "icon": "envelope"

        }
    ]
        }
      )
    },
    created(){

    }
}
</script>

<style>

.pad-down{
  padding-bottom: 15px;
}

</style>