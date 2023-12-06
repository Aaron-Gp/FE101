<template>
  <router-view />
</template>

<script setup lang="ts">
import { TailwindDarkFix } from 'src/composables/tw-dark-fix';
TailwindDarkFix();
</script>
