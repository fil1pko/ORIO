<template>
    <swiper
      :spaceBetween="0"
      :centeredSlides="false"
      :autoplay="{
        delay: 3500,
        disableOnInteraction: false,
      }"
      :pagination="{
        clickable: true,
      }"
      :navigation="false"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide><img src="../assets/pictures/cameras1.jpg" alt="camera photo"></swiper-slide>
      <swiper-slide><img src="../assets/pictures/cameras2.jpg" alt="camera photo"></swiper-slide>
      <swiper-slide><img src="../assets/pictures/cameras3.jpg" alt="camera photo"></swiper-slide>
    </swiper>
  </template>
  <script>
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
    // import SwiperCore, { Autoplay } from 'swiper';

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