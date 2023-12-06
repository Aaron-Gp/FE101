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

<!--HTML5表单增强2--autocomplete属性-->
<form action="demo-form.php" autocomplete="on">
  First name:<input type="text" name="fname"><br>
  Last name: <input type="text" name="lname"><br>
  E-mail: <input type="email" name="email" autocomplete="off"><br>
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
