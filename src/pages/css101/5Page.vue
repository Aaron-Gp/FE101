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

<div class="area1">
  <pre>
    .area1 {
    position: relative;
    width: 400px;
    height: 100px;
    background-color: #0f0;
    top: 30px;
    opacity: 0.5;
    z-index: 3;
  }
  </pre>
  <div class="area1-child">
    <pre>
      .area1-child {
      position: absolute;
      z-index: 10;
    }
    </pre>
  </div>
</div>

<div class="area2">
  <pre>



    .area2 {
    position: relative;
    z-index: 2;
  }
  <div class="area2-child">
    <pre>
      .area2-child {
      position: absolute;
      z-index: 100;
    }
    </pre>
  </div>
</div>
        `.trim(),
        cssLibs: ['index.css'],
      },
      'index.css': {
        title: 'CSS',
        defaultValue: `
/* don't clear me */

.area1 {
  position: relative;
  width: 400px;
  height: 130px;
  background-color: #0f0;
  top: 30px;
  opacity: 0.8;
  z-index: 3;
}

.area1-child {
  position: absolute;
  width: 150px;
  height: 120px;
  background-color: yellow;
  top: 30px;
  left: 250px;
  opacity: 1;
  z-index: 10;
}

.area2 {
  position: relative;
  width: 400px;
  height: 130px;
  background-color: pink;
  margin-top: -10px;
  opacity: 0.8;
  z-index: 2;
}

.area2-child {
  position: absolute;
  width: 170px;
  height: 120px;
  background-color: orange;
  top: 20px;
  left: 250px;
  opacity: 1;
  z-index: 100;
}

.pre {
  font: 12px/1.5 Menlo, Consolas, monospace;
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
