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

<div class="awesome-border fluid"></div>
        `.trim(),
        cssLibs: ['index.css'],
      },
      'index.css': {
        title: 'CSS',
        defaultValue: `
/* don't clear me */

:root{
  --rad: 0;
}
.awesome-border{
  width: 150px;
  height: 100px;
  border: 8px solid transparent;
  border-radius: 12px;
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  filter: hue-rotate(360deg);
  background-image:
    linear-gradient(to right, #fff, #fff),
    linear-gradient(calc(var(--rad) * 1deg), #e941ab, #a557ef);
}
.fluid{
  animation: fluid 1.25s infinite linear;
}
.huerot{
  animation: huerotate 6s infinite ease-in-out;
}
.fluid-huerot{
  animation:
    huerotate 6s infinite ease-in-out,
    fluid 1.5s infinite ease-in-out;
}
@keyframes fluid{
  0% {
    --rad: 0;
  }
  12% {
    --rad: 45;
  }
  25% {
    --rad: 90;
  }
  38% {
    --rad: 135;
  }
  50% {
    --rad: 180;
  }
  62% {
    --rad: 225;
  }
  75% {
    --rad: 270;
  }
  88% {
    --rad: 315;
  }
  100% {
    --rad: 360;
  }
}

@keyframes huerotate{
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(360deg);
  }
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
