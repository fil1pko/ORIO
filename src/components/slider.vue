<template>
    <swiper
      :spaceBetween="30"
      :centeredSlides="false"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: true,
      }"
      :pagination="{
        clickable: false,
      }"
      :navigation="false"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide>
      <swiper-slide>Slide 9</swiper-slide>
    </swiper>
  </template>
  <script>
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
  
    // Import Swiper styles
    import 'swiper/css';
  
    import 'swiper/css/pagination';
    import 'swiper/css/navigation';
  
    // import required modules
    import { Autoplay} from 'swiper/modules';
  
    export default {
      components: {
        Swiper,
        SwiperSlide,
      },
      setup() {
        return {
          modules: [Autoplay],
        };
      },
    };
  </script>
  
<style>
    @import '../assets/styles/colors.scss';
    @import '../assets/styles/slider.scss';
</style>