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

<!--HTML5表单增强3--novalidate属性-->
<form action="demo-form.php" novalidate>
  E-mail: <input type="email" name="user_email">
  <input type="submit">
</form>
        `.trim(),
      },
    },
    defaultConfig: {
      height: '400px',
    },
  });
});
</script>
