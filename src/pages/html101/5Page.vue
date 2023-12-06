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

<!--HTML5表单增强1-->
<html>
<body>
  <form oninput="x.value=parseInt(item1.value)+parseInt(tax.value)">0
    <input type="range" id="item1" value="50">100
    +<input type="number" id="tax" value="12.5">
    =<output name="x" for="item1 tax"></output>
  </form>
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
