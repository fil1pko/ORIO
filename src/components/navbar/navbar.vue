<template>
    <header>
        <nav>
      <!-- left menu side -->
      <ul>
        <div class="long"></div>
        <li><a @click="scrollToSection('home')" :class="{ 'navLink active': activeSection === 'home' }">Domov</a></li>
        <div class="short"></div>
        <li><a @click="scrollToSection('about')" :class="{ 'navLink active': activeSection === 'about' }">O nás</a></li>
        <div class="long"></div>
      </ul>
  
      <!-- logo/middle part -->
      <img src="../../assets/pictures/logo.svg" alt="logo">
  
      <!-- right menu side -->
      <ul>
        <div class="long"></div>
        <li><a @click="scrollToSection('services')" :class="{ 'navLink active': activeSection === 'services' }">Služby</a></li>
        <div class="short"></div>
        <li><a @click="scrollToSection('contact')" :class="{ 'navLink active': activeSection === 'contact' }">Kontakt</a></li>
        <div class="long"></div>
      </ul>
    </nav>
    </header>
</template>
  
<script>
export default {
  data() {
    return {
      activeSection: 'home',
    };
  },
  methods: {
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
    // default styling imports
    @import '../../assets/styles/colors.scss';
    @import '../../assets/styles/navbar.scss';
</style>