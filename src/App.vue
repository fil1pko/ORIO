<script setup>
import navbar from './components/navbar/navbar.vue'
import home from './components/sections/home.vue'
import services from './components/sections/services.vue'
import about from './components/sections/about.vue'
import contact from './components/sections/contact.vue'
import PageLoader from './components/PageLoader.vue'


</script>

<template>
    <PageLoader />
    <navbar/>
  <main>
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
