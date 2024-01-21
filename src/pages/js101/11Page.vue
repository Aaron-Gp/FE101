<template>
  <div>
    <textarea v-model="userCode" @input="parseCode"></textarea>
    <div v-if="ast">
      <vue-json-pretty :data="ast" :virtual="true"></vue-json-pretty>
    </div>
  </div>
</template>

<script>
import VueJsonPretty from 'vue-json-pretty';
import 'vue-json-pretty/lib/styles.css';
import { parse } from 'acorn';

export default {
  components: {
    VueJsonPretty,
  },
  data() {
    return {
      userCode: '',
      ast: null,
    };
  },
  methods: {
    parseCode() {
      try {
        this.ast = parse(this.userCode, { sourceType: 'module' });
      } catch (error) {
        console.error(error);
      }
    }
  },
};
</script>
