<template>
  <q-page class="items-center fit q-pa-md">
    <div class="tw-my-8">
      <div id="sandbox1"></div>
    </div>
    <div class="tw-my-8">
      <div id="sandbox2"></div>
    </div>
  </q-page>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  new MiniSandbox({
    el: '#sandbox1',
    files: {
      'index.html': {
        title: 'HTML',
        defaultValue: `
<!-- don't clear me -->

<div class="triangle-bottom"></div>

<div class="ratio-box"></div>

<div class="wrap">
  <div class="h-center"></div>
</div>

<div class="awesome-border"></div>
        `.trim(),
        cssLibs: ['index.css'],
      },
      'index.css': {
        title: 'CSS',
        defaultValue: `
/* don't clear me */

.triangle-bottom {
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 50px solid #f00;
}

.ratio-box {
  background: cadetblue;
  width: 50%; /* 50% of parent */
  height: 0;
  padding-bottom: 0;
  padding-bottom: 37.5%; /* 37.5% of parent */
}

.wrap {
  width: 100%;
  height: 80px;
  border: 1px dashed grey;
}

.h-center {
  width: 100px;
  height: 50px;
  background-color: navajowhite;
  margin: 10px auto; /* 左右两侧margin为auto,实现水平居中 */
}

.awesome-border {
  width: 150px;
  height: 100px;
  border: 8px solid transparent;
  border-radius: 12px;
  background-clip: padding-box, border-box; /* 设置背景图片的裁剪区域 */
  background-origin: padding-box, border-box; /* 设置背景图片的起始位置 */
  background-image: linear-gradient(to right,#fff,#fff),
                    linear-gradient(135deg,#e941ab,#a557ef); /* 设置背景 */
}
        `.trim(),
      },
    },
    defaultConfig: {
      height: '400px',
    },
  })

  new MiniSandbox({
    el: '#sandbox2',
    files: {
      'index.html': {
        title: 'HTML',
        defaultValue: `
<!-- don't clear me -->

<div class="awesome-border fluid"></div>
        `.trim(),
        cssLibs: ['index.css'],
      },
      'index.css': {
        title: 'CSS',
        defaultValue: `
/* don't clear me */

:root{
  --rad: 0;
}
.awesome-border{
  width: 150px;
  height: 100px;
  border: 8px solid transparent;
  border-radius: 12px;
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  filter: hue-rotate(360deg);
  background-image:
    linear-gradient(to right, #fff, #fff),
    linear-gradient(calc(var(--rad) * 1deg), #e941ab, #a557ef);
}
.fluid{
  animation: fluid 1.25s infinite linear;
}
.huerot{
  animation: huerotate 6s infinite ease-in-out;
}
.fluid-huerot{
  animation:
    huerotate 6s infinite ease-in-out,
    fluid 1.5s infinite ease-in-out;
}
@keyframes fluid{
  0% {
    --rad: 0;
  }
  12% {
    --rad: 45;
  }
  25% {
    --rad: 90;
  }
  38% {
    --rad: 135;
  }
  50% {
    --rad: 180;
  }
  62% {
    --rad: 225;
  }
  75% {
    --rad: 270;
  }
  88% {
    --rad: 315;
  }
  100% {
    --rad: 360;
  }
}

@keyframes huerotate{
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(360deg);
  }
}
        `.trim(),
      },
    },
    defaultConfig: {
      height: '400px',
    },
  })
})

</script>
