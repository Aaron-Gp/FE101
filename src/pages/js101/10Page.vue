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
<div style="margin-bottom:1rem;">Console Output:</div>
<div id="example3"></div>
        `.trim(),
        jsLibs: ['index.js'],
      },
      'index.js': {
        title: 'JS',
        defaultValue: `
// don't clear me
const output = document.querySelector('#example3');
function showName(){
				const company = "Byredance";
				const dep = "边缘云";
				const name = "zhangqi";
				output.innerHTML += 'company'+company+'<br/>';
				return function(){
					output.innerHTML +=dep+'<br/>';
					return name
				}
			}
			const getName = showName();
			output.innerHTML +=getName()+'<br/>';
        `.trim(),
      },
    },
    defaultConfig: {
      height: '400px',
    },
  });
});
</script>
