<template>
  <div id="app">
    <!-- <TestComponent />
    <img alt="Vue logo" src="./assets/logo.png"> -->
    {{ count }}
    <button @click="handleClick">add 1</button>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
// import TestComponent from './components/TestComponent.vue'

export default {
  name: 'App',
  components: {
    // TestComponent
  },
  computed: {
    ...mapGetters(['count']),
  },
  methods: {
    ...mapMutations(['increment']),
    handleClick() {
      this.increment();
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
