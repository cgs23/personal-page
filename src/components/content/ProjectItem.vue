<template>
    <div class="cardContainer inactive">
        <div class="custom-card" :class="{ active: active }">
            <div class="side front">
                <div class="grid-item title">
                    <p :class="{ white: darkmode, black: !darkmode }">{{ title }}</p>
                </div>
                <div class="grid-item but">
                    <button class="btn btn-lg" :class="{ 'btn-outline-light': darkmode, ' btn-outline-dark': !darkmode }"
                        @click='flipCard'>Details</button>
                </div>
            </div>


            <div class="side back">
                <div class="grid-item icons">
                    <span v-for='(icon, index) in icons' :key='icon.id'>
                        <v-icon :name='icon.name' scale="2.2" :title='icon.title'
                            :class="{ grey: darkmode, purp: !darkmode }" />
                        <div v-show='index != icons.length - 1' class="divider"></div>
                    </span>
                </div>

                <div class="grid-item description">
                    <p :class="{ white: darkmode, black: !darkmode }">{{ description }}</p>
                </div>
                <div class="grid-item but">
                    <button class="btn" :class="{ 'btn-outline-light': darkmode, ' btn-outline-dark': !darkmode }"
                        @click='flipCard'>
                        <v-icon name='arrow-left' scale="1.5" />
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script scoped>
import { EventBus } from '../../eventBus.js'


export default {
    name: 'ProjectItem',
    props: [
        'id',
        'title',
        'description',
        'icons'
    ],
    components: {

    },
    data() {
        return ({
            active: null,
            darkmode: true
        })
    },
    mounted() {

    },
    methods: {
        flipCard() {
            this.active = this.active ? null : 'active';
        }
    },
    created() {
        EventBus.$on('dark-mode', (val) => {
            this.darkmode = val;
        });
    },
}
</script>

<style>
.cardContainer {
    position: relative;
    width: 24rem;
    height: 22rem;
}

p {
    color: white;
}


.active {
    transform: translateZ(0px) rotateY(180deg) !important;
}


.custom-card {
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    display: inline-block;
    width: 100%;
    height: 100%;
    -moz-backface-visibility: hidden;
    transform-style: preserve-3d;
    transform: translateZ(-100px);
    transition: all 0.9s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.custom-card:after {
    content: "";
    position: relative;
    z-index: -1;
    width: 100%;
    height: 100%;
    box-shadow: 0 14px 50px -4px rgba(0, 0, 0, 0.15);
    opacity: 0;
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}


.custom-card .content {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 0.8s cubic-bezier(0.75, 0, 0.85, 1);
}

.custom-card .side {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    padding: 10px;
}

.front {
    display: grid;
    grid-template-rows: [row] 20% [row] 55% [row] 25%;
    grid-template-columns: [col] auto [col] auto [col] auto [col] auto;
}

.title {
    grid-column: col / span 4;
    grid-row: row 2;
    font-size: 40px;
    line-height: 80%;
    margin-top: 40px;
}

.but {
    grid-row: row 3;
    grid-column: col 2 / span 2;
}

.icons {
    grid-row: row 1;
    grid-column: col 2 / span 2;
}

.description {
    grid-column: col / span 4;
    grid-row: row 2;
    font-size: 20px;
    line-height: 100%;
}


.back {
    display: grid;
    grid-template-rows: [row] 20% [row] 55% [row] 25%;
    grid-template-columns: [col] auto [col] auto [col] auto [col] auto;
}

.grid-item {
    padding: 20px;
    text-align: center;
}

.custom-card .front {
    z-index: 2;
}

.custom-card .back {
    transform: rotateY(180deg);
}


.front,
.back {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

button.btn.btn-outline-light:hover {
    background-color: #232323;
    color: white;
}
</style>