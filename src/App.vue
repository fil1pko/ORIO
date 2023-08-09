<script setup>
import navbar from './components/navbar/navbar.vue'
import home from './components/sections/home.vue'
import services from './components/sections/services.vue'
import about from './components/sections/about.vue'
import contact from './components/sections/contact.vue'

import { VuePreloader } from 'vue-preloader'
// import '@/node_modules/vue-preloader/dist/style.css'
// import slider from './components/slider.vue'
</script>

<template>
    <navbar/>
  <main>
    <home />
    <about />
    <services />
  </main>

  <footer>
    <contact />
  </footer>

  <VuePreloader
  background-color="#091a28"
  color="#ffffff"
  transition-type="fade-up"
  :loading-speed="25"
  :transition-speed="1400"
  @loading-is-over="showAnimation = false"
  @transition-is-over="transitionIsOver"
>
  <template v-slot="{ percent, color }">
    <transition name="loading-animation" mode="in-out" />  
      <span
        v-if="showAnimation"
        :style="{ color }"
      >
        {{ percent }}
      </span>
    <!-- </transition> -->
  </template>
</VuePreloader>

<style lang="scss">
  @import './assets/base.scss';
  @import './assets/styles/colors.scss';
</style>
