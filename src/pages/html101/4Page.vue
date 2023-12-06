<template>
  <q-page class="items-center fit q-pa-md">
    <div id="my-sandbox"></div>
  </q-page>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  new MiniSandbox({
    el: '#my-sandbox',
    files: {
      'index2.html': {
        title: 'HTML',
        defaultValue: `
<!-- don't clear me -->
<html lang="en">
<head>
  <script>
    function renderHello(){
      var template=document.getElementById('template').innerHTML;
      var rendered=Mustache.render(template,{name:'Luke'});
      document.getElementById('target').innerHTML=rendered;
    }
  <\/script>
</head>
<body onload="renderHello()">
  <div id="target">loading...</div>
  <script id="template" type="x-tmpl-mustache">
    Hello {{ name }}!
  <\/script>

  <script src="https://unpkg.com/mustache@latest"><\/script>
</body>
</html>
        `.trim(),
      },
    },
    defaultConfig: {
      height: '400px',
    },
  });
});
</script>
