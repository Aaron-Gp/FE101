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

<div
  style="width:350px;height:70px;border:1px solid #aaa;"
  ondrop="drop(event)"
  ondragover="allowDrop(event)"
></div>

<img
  id="w3s"
  src="https://www.w3schools.com/html/img_logo.gif"
  draggable="true"
  ondragstart="drag(event)"
  width="336"
  height="69"
/>

<script>
  function allowDrop(ev){
    ev.preventDefault()
  }
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id)
  }
  function drop(ev) {
    ev.preventDefault()
    var data = ev.dataTransfer.getData("text")
    ev.target.appendChild(document.getElementById(data))
  }
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
