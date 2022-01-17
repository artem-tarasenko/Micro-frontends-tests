<template>
  <img id="logo" alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
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

#single-spa-application\:settings {
  order: 3;

}

.single-spa-container {
  display: flex;
  justify-content: space-around;
  align-content: center;
  border: 2px dashed rgb(69, 165, 230);
  margin: 1rem;
  padding: 1rem;
}

#logo {
  width: 5rem;
  height: 5rem;
}
</style>
