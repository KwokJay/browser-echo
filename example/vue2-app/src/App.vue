<template>
  <div id="app">
    <h1>Vue 2 Demo for Browser Echo</h1>
    <p>Open the terminal running the MCP server to see logs.</p>
    <button @click="triggerLog">Trigger Log</button>
    <button @click="triggerWarn">Trigger Warn</button>
    <button @click="triggerError">Trigger Error</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    console.log('Vue 2 App component mounted!');
  },
  methods: {
    triggerLog() {
      console.log('A regular log message from Vue 2.', { data: 123 });
    },
    triggerWarn() {
      console.warn('A warning message from Vue 2.');
    },
    triggerError() {
      console.error('An error message from Vue 2.', new Error('Something went wrong'));
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
button {
  margin: 5px;
  padding: 10px 15px;
  font-size: 16px;
}
</style>
