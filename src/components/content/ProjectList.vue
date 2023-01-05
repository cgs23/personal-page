<template>
  <div class="container-fluid pad text-left">
      <h2 :class="{gray: darkmode, purp: !darkmode}">Notable projects I have worked on</h2>
      <h4>Some of the projects shown below have been implemented for academic purposes, others just for fun.
      </h4>
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
                    description: 'Implemented an automatic crawler to retrieve daily the newly released Government Gazette Issues from the National Printing Office’s website, paired with a custom administrator tool for the management of the downloaded documents.',
                    icons: [
                        {
                            id: 1,
                            title: 'Python',
                            name: 'brands/python'
                        }
                    ]
                },
                // {
                //     id: 2,
                //     title: 'This website!',
                //     description: "Well.. hello there! Started as a Vue training exercise but turned out pretty nice, don't you think?",
                //     icons: [
                //         {
                //             id: 1,
                //             title: 'Vue',
                //             name: 'brands/vuejs'
                //         },
                //         {
                //             id: 2,
                //             title: 'Javascript',
                //             name: 'brands/js-square'
                //         },
                //         {
                //             id: 3,
                //             title: 'Custom CSS',
                //             name: 'brands/css3-alt'
                //         },
                //     ]
                // },
                                {
                    id: 3,
                    title: "'How do you feel?'",
                    description: 'A sentiment analysis platform, with custom machine learning models. It can also communicate with a variety of social media APIs (Twitter, Reddit, Youtube) to retrieve and analyze texts based on a query, graphically presenting the results to the user.',
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
                    description: 'CUDA & MPI Implementation of the famous 1970 cellular automaton, as well as animation of the results via a custom gnuplot script.',
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
                    description: 'A URL shrinker application, where the user enters a URL and a smaller version of it appears, for easier copy/pasting of gargantuan links.',
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
                    title: "HCII 2021 Publication",
                    description: "'A Sentiment Analysis Web Platform for Multiple Social Media Types and Language-Specific Customizations' .For more information visit: https://link.springer.com/chapter/10.1007/978-3-030-78462-1_24" ,
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
                    description: 'Developed as a team project for a university course, it is an escape room inspired 3D game, where the played has to solve riddles and get out (hehe) of a haunted house within the time limit.',
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
                {
                    id: 7,
                    title: "Wordle Clone",
                    description: 'Jumped on the Wordle craze train and developed a copy version of the famous word quiz.',
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
                            title: 'Redux',
                            name: 'brands/redux'
                        },
                    ]
                },
                                {
                    id: 8,
                    title: "LingLand",
                    description: 'Developed for the DeMiNeS, it is a photo library containing a variety of graffiti, street slogans and more. Can be visited at: https://demines-lingland.del.auth.com',
                    icons: [
                        {
                            id: 1,
                            title: 'Linux hosting',
                            name: 'brands/linux'
                        },
                        {
                            id: 2,
                            title: 'NextJS/React',
                            name: 'brands/react'
                        },
                                                {
                            id: 3,
                            title: 'Firebase',
                            name: 'database'
                        },
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