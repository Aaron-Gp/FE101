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
      'index2.html': {
        title: 'HTML',
        defaultValue: `
<!-- don't clear me -->

<script>
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)
  const osci = audioCtx.createOscillator()
  const gain = audioCtx.createGain()
  osci.connect(gain)
  gain.connect(audioCtx.destination)
  // osci.start()
<\/script>
        `.trim(),
      },
    },
    defaultConfig: {
      height: '400px',
    }
  })
})

</script>
