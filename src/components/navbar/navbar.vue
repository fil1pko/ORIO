<template>
    <header>
      <!-- logo for smaller devices -->
      <img class="img-tb" src="../../assets/pictures/logo.svg" alt="logo">
      <!-- navbar -->
      <nav :class="{ 'your-class-name': isClassAdded }">
      <!-- left menu side -->
      <ul>
        <div class="long"></div>
        <li><a @click="scrollToSection('home')" :class="{ 'navLink active': activeSection === 'home' }">{{ $t('home') }}</a></li>
        <div class="short"></div>
        <li><a @click="scrollToSection('about')" :class="{ 'navLink active': activeSection === 'about' }">{{ $t('about') }}</a></li>
        <div class="long none"></div>
      </ul>
  
      <!-- logo/middle part -->
      <img src="../../assets/pictures/logo.svg" alt="logo">
  
      <!-- right menu side -->
      <ul>
        <div class="long none"></div>
        <li><a @click="scrollToSection('services')" :class="{ 'navLink active': activeSection === 'services' }">{{ $t('services') }}</a></li>
        <div class="short"></div>
        <li><a @click="scrollToSection('contact')" :class="{ 'navLink active': activeSection === 'contact' }">{{ $t('contact') }}</a></li>
        <div class="long"></div>
      </ul>
    </nav>

    <!-- hamburger button -->
    <button @click="toggleIcon" class="open">
      <img v-if="!isClassAdded" src="../../assets/pictures/open.svg" alt="open">
      <img v-else src="../../assets/pictures/close.svg" alt="close">
    </button>
    </header>
</template>
  
<script>
export default {
  data() {
    return {
      activeSection: 'home',
      isClassAdded: false
    };
  },
  methods: {
    toggleIcon() {
      this.isClassAdded = !this.isClassAdded;
    },
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    },
    handleScroll() {
      const sections = ['home', 'about', 'services', 'contact'];
      const offset = 600;

      for (const sectionId of sections) {
        const target = document.getElementById(sectionId);
        if (target) {
          const rect = target.getBoundingClientRect();
          if (rect.top <= offset && rect.bottom >= offset) {
            this.activeSection = sectionId;
            break;
          }
        }
      }
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<style lang="scss">
    @import '../../assets/styles/colors.scss';
    @import '../../assets/styles/navbar.scss';
</style>