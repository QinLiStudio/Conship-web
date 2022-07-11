<template>
  <div id="app">
    <div>
      <div>
        <AllButton />
      </div>
    </div>
    <router-view />
  </div>
</template>
<script>
import AllButton from './views/AllButton.vue'

export default {
  name: 'App',
  components: {
    AllButton,
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
