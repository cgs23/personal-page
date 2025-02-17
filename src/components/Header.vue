<template>
  <header class="container-fluid pad">
    <div class="row header">
      <div class="col"></div>
      <div class="col-2">
        <div class="row">
          <div class="col">
            <input style="float:right;" v-model='darkModeStatus' type="checkbox" class="toggle">
          </div>
          <div class="col">
            <v-icon style="float:left" :name='iconName' scale="2" :title='title' />
          </div>
        </div>
      </div>

    </div>
  </header>
</template>
<script>
import { EventBus } from '@/eventBus.js'

export default {
  name: 'Header',
  mounted() {
    this.iconName = this.darkMode.icon;
    this.title = this.darkMode.title;
  },
  data() {
    return (
      {
        darkModeStatus: true,
        iconName: null,
        title: null,
        lightMode: {
          icon: 'sun',
          title: 'Click to switch to light mode.. you weirdo.'
        },
        darkMode: {
          icon: 'moon',
          title: 'Welcome to the dark side. :)'
        }
      }
    )
  },
  methods: {
    switchDarkMode() {
    }
  },
  watch: {
    darkModeStatus() {
      this.iconName = this.darkModeStatus ? this.darkMode.icon : this.lightMode.icon;
      this.title = this.darkModeStatus ? this.darkMode.title : this.lightMode.title;
      EventBus.$emit('dark-mode', this.darkModeStatus);
    }
  }
}
</script>

<style scoped>
.move-down {
  margin-top: 20px;
}

.header {
  height: 7em;
  display: flex;
  align-items: center;
}

.bord {

  outline: 2px #ffffff;
  outline-style: Dotted;
  outline-offset: 0.2em;
}

* {
  box-sizing: border-box;
}

input[type=checkbox] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
}

input[type=checkbox]:focus {
  outline: 0;
}

.toggle {
  height: 32px;
  width: 52px;
  border-radius: 16px;
  display: inline-block;
  position: relative;
  margin: 0;
  border: 2px solid #474755;
  background: linear-gradient(180deg, #2D2F39 0%, #1F2027 100%);
  transition: all 0.2s ease;
}

.toggle:after {
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: white;
  box-shadow: 0 1px 2px rgba(44, 44, 44, 0.2);
  transition: all 0.2s cubic-bezier(0.5, 0.1, 0.75, 1.35);
}

.toggle:checked {
  border-color: #654FEC;
}

.toggle:checked:after {
  transform: translatex(20px);
}
</style>