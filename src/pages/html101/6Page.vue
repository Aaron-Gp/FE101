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

<!--inline、internal、external CSS-->
<<html>
  <head>
    <style type="text/css">
      body {
        background-color: blue;
      }
      p {
        color: yellow;
      }
    </style>
  </head>
  <body>
    <p style="color: black">This is paragragh</p>
    <p>This is a paragragh</p>
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
