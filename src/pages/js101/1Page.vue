<template>
  <q-page class="items-center fit q-pa-md">
    <q-markdown
      :src="md1"
      :plugins="plugins"
      show-copy
      class="tw-mb-8"
    ></q-markdown>
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
import emoji from 'markdown-it-emoji';

const plugins = [emoji];

onMounted(() => {
  new MiniSandbox({
    el: '#sandbox1',
    files: {
      'index.html': {
        title: 'HTML',
        defaultValue: `
<!-- don't clear me -->

<div style="margin-bottom:1rem;">Console Output:</div>
<div id="output"></div>
        `.trim(),
        jsLibs: ['index.js'],
      },
      'index.js': {
        title: 'JS',
        defaultValue: `
// don't clear me

const output = document.querySelector('#output');

output.innerHTML += "同步代码1<br/>";
setTimeout(()=>{
  output.innerHTML += "setTimeout<br/>";
},0);
new Promise((resolve)=>{
  output.innerHTML += "同步代码2<br/>";
  resolve();
}).then(()=>{
  output.innerHTML += "promise.then<br/>";
}).then(()=>{
  output.innerHTML += "promise.then111<br/>";
})
output.innerHTML += "同步代码3<br/>";
        `.trim(),
      },
    },
    defaultConfig: {
      height: '400px',
    },
  });
});

const md1 = `
# Donate
If you appreciate the work that went into this, please consider donating to [Quasar](https://donate.quasar.dev) or
[Jeff](https://github.com/sponsors/hawkeye64).

---

\`\`\`js
import { onMounted, ref } from 'vue'
const a = 1;
\`\`\`

This page created with [QMarkdown](https://quasarframework.github.io/quasar-ui-qmarkdown), another great Quasar App
Extension.

Classic markup: :wink: :joy: :cry: :angel: :heart: :beers: :laughing: :yum:

Shortcuts (emoticons): :-) :-( 8-) ;)

**This is bold text** ~~This is Strikethrough~~

::: info With Custom Title
here be **dragons**
with a \`token\` and a [link](https://quasar.dev)
:::

![Minion](https://octodex.github.com/images/minion.png =200x200)

(c) (C) (r) (R) (tm) (TM) (p) (P) +-

test.. test... test..... test?..... test!...

!!!!!! ???? ,,  -- ---

Smartypants: "double quotes" and 'single quotes'
`;
</script>
