<script setup>
// import HelloWorld from './components/HelloWorld.vue'
import navbar from './components/navbar/navbar.vue'
import home from './components/sections/home.vue'
import services from './components/sections/services.vue'
import about from './components/sections/about.vue'
import contact from './components/sections/contact.vue'
// import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <!-- <header> -->
    <!-- <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" /> -->
    <navbar/>
    <!-- <div class="wrapper"> -->
      <!-- <h1>super apka funguje</h1> -->
      <!-- <HelloWorld msg="You did it!" /> -->
    <!-- </div> -->
  <!-- </header> -->

  <main>
    <!-- <TheWelcome /> -->
    <home />
    <about />
    <services />
  </main>

  <footer>
    <contact />
  </footer>
</template>

<style lang="scss">
  @import './assets/base.scss';
  @import './assets/styles/colors.scss';
</style>
