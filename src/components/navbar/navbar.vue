<template>
    <header>
        <nav>
      <!-- left menu side -->
      <ul>
        <span><hr class="long"></span>
        <li><a @click="scrollToSection('home')" :class="{ 'active': activeSection === 'home' }">Domov</a></li>
        <span><hr class="short"></span>
        <li><a @click="scrollToSection('about')" :class="{ 'active': activeSection === 'about' }">O nás</a></li>
        <span><hr class="long"></span>
      </ul>
  
      <!-- logo/middle part -->
      <img src="../../assets/pictures/logo.svg" alt="logo">
  
      <!-- right menu side -->
      <ul>
        <span><hr class="long"></span>
        <li><a @click="scrollToSection('services')" :class="{ 'active': activeSection === 'services' }">Služby</a></li>
        <span><hr class="short"></span>
        <li><a @click="scrollToSection('contact')" :class="{ 'active': activeSection === 'contact' }">Kontak</a></li>
        <span><hr class="long"></span>
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
          this.activeSection = sectionId;
        }
      },
    },
  };
</script>

<style lang="scss">
    // default styling imports
    @import '../../assets/styles/colors.scss';
    @import '../../assets/styles/navbar.scss';
</style>