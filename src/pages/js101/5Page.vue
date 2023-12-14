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
<div id ='example1'></div>

        `.trim(),
        jsLibs: ['index.js'],
      },
      'index.js': {
        title: 'JS',
        defaultValue: `
// don't clear me
const exa = document.querySelector('#example1');
var scop = 'global'
func();
exa.innerHTML += company;
//console.log(company);
function func(){
  var funcVar = 'func';
  exa.innerHTML += "这个是个函数:"
  exa.innerHTML += funcVar;
  exa.innerHTML += "<br/>";
  //console.log('这是个函数',funcVar);
}
var company = '字节跳动'
exa.innerHTML += "<br/><br/>以上的company会显示出undefined是由于其为var"
exa.innerHTML += "可以变量提升，提前访问"
        `.trim(),
      },
    },
    defaultConfig: {
      height: '400px',
    },
  });
});
</script>
