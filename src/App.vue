<script setup>
import HelloWorld from './components/HelloWorld.vue'
import navbar from './components/navbar/navbar.vue'
// import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" /> -->
    <navbar/>
    <div class="wrapper">
      <h1>super apka funguje</h1>
      <!-- <HelloWorld msg="You did it!" /> -->
    </div>
  </header>

  <main>
    <!-- <TheWelcome /> -->
  </main>
</template>

<style lang="scss">
  @import './assets/style.scss';
  @import './assets/styles/colors.scss';

</style>
