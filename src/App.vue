<template>
  <div id="app">
    <h1>NT2 – Trabajo Práctico 8 - Vuex asincrónico y router</h1>
    <br>
    <Formulario />
  </div>
</template>

<script>
import Formulario from './components/Formulario.vue'

export default {
  name: 'App',
  components: {
    Formulario
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
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1438' height='560' preserveAspectRatio='none' viewBox='0 0 1438 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1184%26quot%3b)' fill='none'%3e%3crect width='1438' height='560' x='0' y='0' fill='url(%23SvgjsLinearGradient1185)'%3e%3c/rect%3e%3cpath d='M 0%2c244 C 96%2c218.6 288%2c122.4 480%2c117 C 672%2c111.6 768.4%2c238.8 960%2c217 C 1151.6%2c195.2 1342.4%2c49.8 1438%2c8L1438 560L0 560z' fill='rgba(98%2c 163%2c 232%2c 1)'%3e%3c/path%3e%3cpath d='M 0%2c412 C 96%2c418.4 288%2c464.8 480%2c444 C 672%2c423.2 768.4%2c285.8 960%2c308 C 1151.6%2c330.2 1342.4%2c505.6 1438%2c555L1438 560L0 560z' fill='rgba(36%2c 171%2c 103%2c 1)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1184'%3e%3crect width='1438' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='100%25' y1='50%25' x2='0%25' y2='50%25' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1185'%3e%3cstop stop-color='%230e2a47' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(41%2c 97%2c 170%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e");
}
label, h1{
  color: aliceblue;
}

* { 
    margin: 0px;
    padding: 0;
    box-sizing: border-box;
}
</style>
