<template>
  <q-page class="items-center fit q-pa-md">
    <div class="tw-text-black">
      <div
        id="sandbox1"
        class="mini-sandbox"
        :class="$q.dark.isActive ? 'sandbox-theme-dark' : 'sandbox-theme-light'"
      ></div>
    </div>
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
<div style="margin-bottom:1rem;">Section 2:<br/>how JS run:</div>
<div id ='example3'></div>
        `.trim(),
        jsLibs: ['index.js'],
      },
      'index.js': {
        title: 'JS',
        defaultValue: `
// don't clear me
const exa = document.querySelector('#example3');

function testCompany(){
  const company = "Tiktok";
  function testCompany1(){
    const company = "Bytedance";
    function testCompany2(){
      exa.innerHTML += company;
    }
    return testCompany2();
  }
  return testCompany1();
}

testCompany()
exa.innerHTML += "<br/><br/>函数一层层向上找，直到找到company";
        `.trim(),
      },
    },
    defaultConfig: {
      height: '400px',
    },
  });
});
</script>
