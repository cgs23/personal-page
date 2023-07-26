<template>
  <div class="container-fluid pad text-left">
    <h2 :class="{ gray: darkmode, purp: !darkmode }">Tech and soft skills</h2>
    <h4>Still learning and studying, but here is a rough estimation of my skill set.
    </h4>
    <div class="row pad">
      <div class="col-md">

        <!-- Tech Skills -->

        <div class="card">
          <h4 :class="{ 'card-header': darkmode, 'card-header-light': !darkmode }">Technical Skills</h4>
          <div :class="{ 'card-body': darkmode, 'card-body-light': !darkmode }">
            <div class='skill-bars' :class="{ 'skill-bars-dark': darkmode, 'skill-bars-light': !darkmode }">

              <div class="bar">
                <div class="info">
                  <span>Object-Oriented Programming</span>
                </div>
                <div class="oop" :class="{ 'progress-line': animate }">
                  <span></span>
                </div>
              </div>

              <div class="bar">
                <div class="info">
                  <span> .NET Framework / Core </span>
                </div>
                <div class="net" :class="{ 'progress-line': animate }">
                  <span></span>
                </div>
              </div>

              <div class="bar">
                <div class="info">
                  <span> Other backend frameworks (ExpressJS, NextJS, Flask) </span>
                </div>
                <div class="back" :class="{ 'progress-line': animate }">
                  <span></span>
                </div>
              </div>

              <div class="bar">
                <div class="info">
                  <span>Modern Frontend Frameworks (React, Vue, Angular)</span>
                </div>
                <div class="front" :class="{ 'progress-line': animate }">
                  <span></span>
                </div>
              </div>


              <div class="bar">
                <div class="info">
                  <span>Databases (Relational & NoSQL)</span>
                </div>
                <div class="db" :class="{ 'progress-line': animate }">
                  <span></span>
                </div>
              </div>


              <div class="bar">
                <div class="info">
                  <span>Machine Learning Aspects </span>
                </div>
                <div class="ml" :class="{ 'progress-line': animate }">
                  <span></span>
                </div>
              </div>

              <div class="bar">
                <div class="info">
                  <span>Cloud (Azure)</span>
                </div>
                <div class="cloud" :class="{ 'progress-line': animate }">
                  <span></span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div class="col-md">

        <!-- Soft Skills -->

        <div class="card">
          <h4 :class="{ 'card-header': darkmode, 'card-header-light': !darkmode }">Soft skills</h4>
          <div :class="{ 'card-body': darkmode, 'card-body-light': !darkmode }">
            <div class='skill-bars' :class="{ 'skill-bars-dark': darkmode, 'skill-bars-light': !darkmode }">


              <div class="bar">
                <div class="info">
                  <span>Familiar with the Agile Methodology</span>
                </div>
                <div class="agile" :class="{ 'progress-line': animate }">
                  <span></span>
                </div>
              </div>


              <div class="bar">
                <div class="info">
                  <span>Effective management of pressure and deadlines</span>
                </div>
                <div class="deadlines" :class="{ 'progress-line': animate }">
                  <span></span>
                </div>
              </div>


              <div class="bar">
                <div class="info">
                  <span>Effective in planning and decision making</span>
                </div>
                <div class="planning" :class="{ 'progress-line': animate }">
                  <span></span>
                </div>
              </div>


              <div class="bar">
                <div class="info">
                  <span>Adaptive to new technologies/methodologies</span>
                </div>
                <div class="adaptive" :class="{ 'progress-line': animate }">
                  <span></span>
                </div>
              </div>

              <div class="bar">
                <div class="info">
                  <span>Problem Solving / Algorithmic thinking</span>
                </div>
                <div class="algorithmic" :class="{ 'progress-line': animate }">
                  <span></span>
                </div>
              </div>


              <div class="bar">
                <div class="info">
                  <span>Communication & Teamwork</span>
                </div>
                <div class="teamwork" :class="{ 'progress-line': animate }">
                  <span></span>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { EventBus } from '../../eventBus.js'

export default {
  name: 'Skills',
  created() {
    EventBus.$on('dark-mode', (val) => {
      this.darkmode = val;
    });
    EventBus.$on('animate-skills', (val) => {
      this.animate = val;
    })
  },
  data() {
    return ({
      darkmode: true,
      animate: false
    })
  }

}
</script>

<style>
.align {
  align-self: center;
}

.card {
  border: 0px !important;
}

.card-header,
.card-body {
  background-color: #111 !important;
}

.card-header-light,
.card-body-light {
  background-color: #fff !important;
}

.skill-bars {
  padding: 25px 30px;
  width: auto;
  border-radius: 10px;
}

.skill-bars-dark {
  background: #111;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
}

.skill-bars-light {
  background: #fff;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.1);
}

.skill-bars .bar {
  margin: 20px 0;
}

.skill-bars .bar:first-child {
  margin-top: 0px;
}

.skill-bars .bar .info {
  margin-bottom: 5px;
}

.skill-bars .bar .info span {
  font-weight: 500;
  font-size: 17px;
  opacity: 0;
  animation: showText 0.5s 1s linear forwards;
}

@keyframes showText {
  100% {
    opacity: 1;
  }
}

.skill-bars .bar .progress-line {
  height: 10px;
  width: 100%;
  background: #f0f0f0;
  position: relative;
  transform: scaleX(0);
  transform-origin: left;
  border-radius: 10px;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05),
    0 1px rgba(255, 255, 255, 0.8);
  animation: animate 1.5s cubic-bezier(1, 0, 0.5, 1) forwards;
}

@keyframes animate {
  100% {
    transform: scaleX(1);
  }
}

.bar .progress-line span {
  height: 100%;
  position: absolute;
  border-radius: 10px;
  transform: scaleX(0);
  transform-origin: left;
  background: #6665ee;
  animation: animate 2s 1s cubic-bezier(1, 0, 0.5, 1) forwards;
}


.progress-line span::before {
  position: absolute;
  content: "";
  top: -10px;
  right: 0;
  height: 0;
  width: 0;
  opacity: 0;
  animation: showText2 0.5s 1.5s linear forwards;
}

.progress-line span::after {
  position: absolute;
  top: -28px;
  right: 0;
  font-weight: 500;
  background: #000;
  color: #fff;
  padding: 1px 8px;
  font-size: 12px;
  border-radius: 3px;
  opacity: 0;
  animation: showText2 0.5s 1.5s linear forwards;
}

@keyframes showText2 {
  100% {
    opacity: 1;
  }
}

.bar .progress-line.oop span {
  width: 95%;
}

.bar .progress-line.net span {
  width: 85%;
}

.bar .progress-line.front span {
  width: 70%;
}

.bar .progress-line.back span {
  width: 80%;
}

.bar .progress-line.db span {
  width: 75%;
}

.bar .progress-line.ml span {
  width: 65%;
}

.bar .progress-line.cloud span {
  width: 75%;
}

/* SOFT */


.bar .progress-line.agile span {
  width: 85%;
}


.bar .progress-line.deadlines span {
  width: 90%;
}

.bar .progress-line.planning span {
  width: 85%;
}

.bar .progress-line.adaptive span {
  width: 95%;
}

.bar .progress-line.algorithmic span {
  width: 90%;
}

.bar .progress-line.teamwork span {
  width: 95%;
}
</style>