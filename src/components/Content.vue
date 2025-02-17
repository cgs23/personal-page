<template>
  <div class="container-fluid pad-sides">
    <Intro class='visible animated fadeIn delay-1s' />
    <AboutMe class="visible animated fadeInRight delay-2s" />
    <Skills v-observe-visibility="{ callback: isSkillsViewable, once: true, intersection: { threshold: 0.7 } }"
      :class="{ 'visible animated fadeInRight': animateSkills, 'invisible': !animateSkills }" />
    <ProjectList v-observe-visibility="{ callback: isProjectsViewable, once: true, intersection: { threshold: 0.3 } }"
      :class="{ 'visible animated slideInLeft': animateProjects, 'invisible': !animateProjects }" />
    <InterestsList
      v-observe-visibility="{ callback: isInterestsViewable, once: true, intersection: { threshold: 0.4 } }"
      :class="{ 'visible animated slideInRight': animateInterests, 'invisible': !animateInterests }" />
    <Contact v-observe-visibility="{ callback: isContactViewable, once: true, intersection: { threshold: 0.3 } }"
      :class="{ 'visible animated fadeInUp': animateContact, 'invisible': !animateContact }" />
  </div>
</template>

<script>
import Intro from './content/Intro.vue'
import AboutMe from './content/AboutMe.vue'
import ProjectList from './content/ProjectList.vue'
import InterestsList from './content/InterestsList.vue'
import Contact from './content/Contact.vue'
import Skills from './content/Skills.vue'
import { EventBus } from '../eventBus.js'


export default {
  name: 'Content',
  components: {
    AboutMe,
    ProjectList,
    InterestsList,
    Intro,
    Contact,
    Skills
  },
  data() {
    return ({
      animateSkills: false,
      animateProjects: false,
      animateInterests: false,
      animateContact: false,
      show: false
    })
  },
  methods: {
    isSkillsViewable(isVisible) {
      this.animateSkills = isVisible;
      EventBus.$emit('animate-skills', isVisible);
    },
    isProjectsViewable(isVisible) {
      this.animateProjects = isVisible;
    },
    isInterestsViewable(isVisible) {
      this.animateInterests = isVisible;
    },
    isContactViewable(isVisible) {
      this.animateContact = isVisible;
    },
  },
  created() {

  }

}
</script>

<style></style>