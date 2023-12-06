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
<a href="https://animate.style">友情链接(压住Ctrl点击链接)</a>

<div  class="fadeInDown">
  <p>animate.css(刷新观看效果)</p>
</div>
        `.trim(),
        cssLibs: ['index.css'],
      },
      'index.css': {
        title: 'CSS',
        defaultValue: `
/* don't clear me */
@keyframes fedeInDown {
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
  to{
    opacity: 1;
    transform: translated3d(0, 0, 0);
  }
}

.fadeInDown {
  animation-name: fedeInDown;
  animation-duration: 1s;
  animation-fill-mode: both;
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
