<template>
  <div id="app">
    <router-view />
    <MonacoEditor
      width="800"
      height="500"
      theme="vs-dark"
      language="javascript"
      :options="options"
      @change="onChange"
    ></MonacoEditor>
  </div>
</template>
<script>
import MonacoEditor from 'monaco-editor-vue'
export default {
  name: 'App',
  components: {
    MonacoEditor,
  },
  data() {
    return {
      options: {
        //Monaco Editor Options
      },
    }
  },
  methods: {
    onChange(value) {
      console.log(value)
    },
  },
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
