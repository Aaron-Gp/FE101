<template>
  <q-page class="items-center fit q-pa-md">
    <q-markdown :src="md1" :plugins="plugins" show-copy class="tw-mb-8"></q-markdown>
    <div class="tw-text-black">
      <div id="sandbox1"></div>
    </div>
  </q-page>
</template>

<script setup>
import { onMounted } from 'vue'
import emoji from 'markdown-it-emoji'

const plugins = [emoji]

onMounted(() => {
  new MiniSandbox({
    el: '#sandbox1',
    files: {
      'index.html': {
        title: 'HTML',
        defaultValue: `
<!-- don't clear me -->

<button>测试</button>
        `.trim(),
      },
    },
    defaultConfig: {
      height: '400px',
    }
  })
})

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
`

</script>
