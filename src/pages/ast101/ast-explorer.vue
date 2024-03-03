<template>
  <div class="ast-explorer">
    <div class="editor-pane">
      <textarea ref="codeEditor"></textarea>
    </div>
    <div class="ast-pane">
      <pre>{{ astTree }}</pre>
    </div>
  </div>
</template>

<script>
import CodeMirror from 'codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/javascript/javascript'
import * as acorn from 'acorn'

export default {
  data() {
    return {
      astTree: null
    }
  },
  mounted() {
    this.initializeCodeMirror()
  },
  methods: {
    initializeCodeMirror() {
      this.codeEditor = CodeMirror.fromTextArea(this.$refs.codeEditor, {
        mode: 'javascript',
        lineNumbers: true,
      })
      this.codeEditor.on('change', this.updateAST)
    },
    updateAST() {
      try {
        const code = this.codeEditor.getValue()
        this.astTree = JSON.stringify(acorn.parse(code), null, 2)
      } catch (error) {
        this.astTree = 'Error parsing AST';
      }

    }
  }
}
</script>

<style>
.CodeMirror
{
  height: 70%;
}
.ast-explorer {
  display: flex;
  height: 100vh;
}

.editor-pane {
  flex: 1;
  padding: 10px;
  box-sizing: border-box;
}

.ast-pane {
  flex: 1;
  margin-top: 10px;
  padding: 0px;
  height: 67.5%;
  box-sizing: border-box;
  border: solid;
  overflow:auto;
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style>
