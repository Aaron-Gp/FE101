<template>
  <q-page class="items-center fit q-pa-md">
    <div id="my-sandbox"></div>
  </q-page>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  new MiniSandbox({
    el: '#my-sandbox',
    files: {
      'index.html': {
        title: 'HTML',
        defaultValue: `
<!-- don't clear me -->

<input type="checkbox" id="dice" />
<label for="dice">
  <div class="box">
    <div class="box1 face">
      <span class="dot cc-dot red"></span>
    </div>
    <div class="box6 face">
      <span class="dot lt-dot"></span>
      <span class="dot rt-dot"></span>
      <span class="dot lc-dot"></span>
      <span class="dot rc-dot"></span>
      <span class="dot lb-dot"></span>
      <span class="dot rb-dot"></span>
    </div>
    <div class="box2 face">
      <span class="dot lt-dot"></span>
      <span class="dot rb-dot"></span>
    </div>
    <div class="box3 face">
      <span class="dot rt-dot"></span>
      <span class="dot cc-dot"></span>
      <span class="dot lb-dot"></span>
    </div>
    <div class="box4 face">
      <span class="dot lt-dot"></span>
      <span class="dot rt-dot"></span>
      <span class="dot lb-dot"></span>
      <span class="dot rb-dot"></span>
    </div>
    <div class="box5 face">
      <span class="dot lt-dot"></span>
      <span class="dot rt-dot"></span>
      <span class="dot cc-dot"></span>
      <span class="dot lb-dot"></span>
      <span class="dot rb-dot"></span>
    </div>
  </div>
</label>
        `.trim(),
        cssLibs: ['index.css'],
      },
      'index.css': {
        title: 'CSS',
        defaultValue: `
/* don't clear me */

.box{
  width: 100px;
  height: 100px;
  margin: 100px auto;
  transform-style: preserve-3d;
  animation: rotate .5s infinite linear;
  /* animation:
    rotate-x .5s infinite linear,
    rotate-y .8s infinite linear;
  animation-composition: add; */
}
#dice:checked + label .box {
    animation-play-state: paused;
}
.box1 {
    background-position: 0 0;
    transform: rotateY(90deg) translateZ(50px);
}
.box2 {
    background-position: -100px 0;
    transform: rotateY(-90deg) translateZ(50px);
}
.box3 {
    background-position: -300px 0;
    transform: rotateX(90deg) translateZ(50px);
}
.box4 {
    background-position: -400px 0;
    transform: rotateX(-90deg) translateZ(50px);
}
.box5 {
    background-position: -500px 0;
    transform: rotateX(180deg) translateZ(50px);
}
.box6 {
    background-position: -600px 0;
    transform: rotateZ(0deg) translateZ(50px);
}
@keyframes rotate {
    from {
        transform: rotateX(0turn) rotateY(0turn) rotateZ(0);
    }
    to {
        transform: rotateX(0.5turn) rotateY(0.5turn) rotateZ(0turn);
    }
}
@keyframes rotate-x {
    from {
        transform: rotateX(0turn);
    }
    to {
        transform: rotateX(1turn);
    }
}
@keyframes rotate-y {
    from {
        transform: rotateY(0turn);
    }
    to {
        transform: rotateY(1turn);
    }
}
#dice{
  display: none;
}
.face{
  width: 100px;
  height: 100px;
  position: absolute;
  background-color: rgb(59 196 231 / 90%);
  display: grid;
  grid-template-rows: 0.5fr repeat(3, 1fr) 0.5fr;
  grid-template-columns: 0.5fr repeat(3, 1fr) 0.5fr;
  grid-template-areas:
    ". . . . ."
    ". lt . rt ."
    ". lc cc rc ."
    ". lb . rb ."
    ". . . . .";
}
.dot {
  width: 18px;
  height: 18px;
  display: flex;
  align-self: center;
  justify-self: center;
  background-color: black;
  border-radius: 50%;
}
.red {
  background-color: red;
}
.lc-dot {
  grid-area: lc;
}
.rc-dot {
  grid-area: rc;
}
.cc-dot {
  grid-area: cc;
}
.lt-dot {
  grid-area: lt;
}
.rt-dot {
  grid-area: rt;
}
.lb-dot {
  grid-area: lb;
}
.rb-dot {
  grid-area: rb;
}
        `.trim(),
      },
    },
    defaultConfig: {
      height: '400px',
    },
  })
})

</script>
