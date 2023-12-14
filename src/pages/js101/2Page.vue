<template>
  <q-page class="items-center fit q-pa-md">
    <q-markdown :src="md1" :plugins="plugins" show-copy class="tw-mb-8"></q-markdown>
    <div class="tw-text-black">
      <div id="sandbox1"></div>
    </div>
  </q-page>
</template>

<script setup>
import { onMounted } from 'vue'
import emoji from 'markdown-it-emoji'

const plugins = [emoji]

onMounted(() => {
  new MiniSandbox({
    el: '#sandbox1',
    files: {
      'index.html': {
        title: 'HTML',
        defaultValue: `
<!-- don't clear me -->

<div style="margin-bottom:1rem;">Console Output:</div>
<div id="output"></div>
        `.trim(),
        jsLibs: ['index.js']
      },
      'index.js': {
        title: 'JS',
        defaultValue: `
// don't clear me

const output = document.querySelector('#output');

const a = {
  name: 'Reina'
}
const b = a
b.name = 'Reinawww'

output.innerHTML+=a.name+"<br>"
output.innerHTML+=b.name+"<br>"
        `.trim(),
      },
    },
    defaultConfig: {
      height: '400px',
    }
  })
})

const md1 = ''

</script>

