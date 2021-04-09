<template>
  <div class="container-fluid pad text-left">
      <h2 :class="{gray: darkmode, purp: !darkmode}">Notable projects I've worked on</h2>
      <h4>Text text</h4>
      <div class="row" align="center">
          <div v-for='projItem in projItems' :key='projItem.id' class="col-sm">
            <ProjectItem :title='projItem.title' :description="projItem.description" :icons="projItem.icons"/>
          </div>
      </div>
  </div>
</template>

<script>

import ProjectItem from './ProjectItem.vue'
import {EventBus} from '../../eventBus.js'

export default {
    name: 'ProjectList',
  created(){
    EventBus.$on('dark-mode', (val) => {
      this.darkmode=val;
      });
  },
    components: {
        ProjectItem
    },
    data(){
        return{
            darkmode: true,
            projItems: [
                {
                    id: 1, 
                    title: 'Government Gazette Automatic Crawler',
                    description: 'This is the description of the firsdt project. Bla bla? yes. bla bla.',
                    icons: [
                        {
                            id: 1,
                            title: 'Python',
                            name: 'brands/python'
                        }
                    ]
                },
                {
                    id: 2, 
                    title: 'This website!',
                    description: 'This is the description of the firsdt project. Bla bla? yes. bla bla.',
                    icons: [
                        {
                            id: 1,
                            title: 'Vue',
                            name: 'brands/vuejs'
                        },
                        {
                            id: 2,
                            title: 'Javascript',
                            name: 'brands/js-square'
                        },
                        {
                            id: 3,
                            title: 'Custom CSS',
                            name: 'brands/css3-alt'
                        },
                    ]
                },
                                {
                    id: 3, 
                    title: "'How do you feel?'",
                    description: 'This is the description of the firsdt project. Bla bla? yes. bla bla.',
                    icons: [
                        {
                            id: 1,
                            title: 'Javascript',
                            name: 'brands/js-square'
                        },
                        {
                            id: 2,
                            title: 'React',
                            name: 'brands/react'
                        },
                        {
                            id: 3,
                            title: 'Machine Learning',
                            name: 'robot'
                        },                       
                        {
                            id: 4,
                            title: 'Python',
                            name: 'brands/python'
                        }
                    ]
                },
                                {
                    id: 4, 
                    title: 'Game of Life Implementation',
                    description: 'This is the description of the firsdt project. Bla bla? yes. bla bla.',
                    icons: [
                        {
                            id: 1,
                            title: 'C',
                            name: 'copyright'
                        },
                        {
                            id: 2,
                            title: 'Game of Life algorithm',
                            name: 'brands/buromobelexperte'
                        },
                        {
                            id: 3,
                            title: 'Gnuplot',
                            name: 'terminal'
                        }
                    ]
                },
                                {
                    id: 5, 
                    title: "'Shrinklink'",
                    description: 'This is the description of the firsdt project. Bla bla? yes. bla bla.',
                    icons: [
                        {
                            id: 1,
                            title: 'NodeJS',
                            name: 'brands/node-js'
                        },
                        {
                            id: 2,
                            title: 'Vue',
                            name: 'brands/vuejs'
                        },
                        {
                            id: 3,
                            title: 'MongoDB',
                            name: 'database'
                        },

                    ]
                },
                {
                    id: 6, 
                    title: "HCI 2021 Publication",
                    description: 'This is the description of the firsdt project. Bla bla? yes. bla bla.',
                    icons: [
                        {
                            id: 1,
                            title: 'Title of 1st icon',
                            name: 'file-signature'
                        }
                    ]
                },
                                {
                    id: 7, 
                    title: "'Get out'",
                    description: 'This is the description of the firsdt project. Bla bla? yes. bla bla.',
                    icons: [
                        {
                            id: 1,
                            title: 'Unity',
                            name: 'brands/unity'
                        },
                        {
                            id: 2,
                            title: 'Game Development',
                            name: 'gamepad'
                        }
                    ]
                },
            ]
        }
    }
}
</script>

<style>
.row {
    display:flex;
    align-content: center;
    justify-content: center;
}
</style>