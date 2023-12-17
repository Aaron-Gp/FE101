<template>
  <q-page class="items-center fit q-pa-md">
    <div id="sandbox1"></div>
  </q-page>
</template>

<script setup>
import { onMounted } from 'vue';

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
        jsLibs: ['index.js'],
      },
      'index.js': {
        title: 'JS',
        defaultValue: `
// don't clear me

const output = document.querySelector('#output');

output.innerHTML += "同步代码1<br/>";
setTimeout(()=>{
  output.innerHTML += "setTimeout<br/>";
},0);
new Promise((resolve)=>{
  output.innerHTML += "同步代码2<br/>";
  resolve();
}).then(()=>{
  output.innerHTML += "promise.then<br/>";
}).then(()=>{
  output.innerHTML += "promise.then111<br/>";
})
output.innerHTML += "同步代码3<br/>";
        `.trim(),
      },
    },
    defaultConfig: {
      height: '400px',
    },
  });
});
</script>
