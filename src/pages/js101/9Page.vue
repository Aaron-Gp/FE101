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
<div id="example2"></div>
        `.trim(),
        jsLibs: ['index.js'],
      },
      'index.js': {
        title: 'JS',
        defaultValue: `
// don't clear me
const output = document.querySelector('#example2');
function show(){
				function showName(){
				//	output.innerHTML += this+'<br/>'
				}
				showName()
			}
			show()
			const name = 1;
			const obj = {
				name: 'zq',
				showName(){
					output.innerHTML += this.name+'<br/>'
				}
			}
			const obj1={
				name:'bytedance'
			}
			obj.showName.apply(obj1)

			obj.showName()
			function ShowName(){
				this.name = 'zq';
				output.innerHTML += this.name+'<br/>'
			}
			const getName = new ShowName()
			output.innerHTML += getName.name+'<br/>'
        `.trim(),
      },
    },
    defaultConfig: {
      height: '400px',
    },
  });
});
</script>
