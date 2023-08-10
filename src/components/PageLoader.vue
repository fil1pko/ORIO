<template>
    <div class="page-loader" v-if="!isloaded">
        <div class="loading-circle">
        </div>
    </div> 
  </template>
  
  <script>
    export default {
      data: () => {
        return {
          isloaded: false
        }
      },
      mounted() {
        document.onreadystatechange = () => {
          if (document.readyState == "complete") { 
            this.isloaded = true;
          } 
        }
      },
    }
  </script>
  
  <style lang="scss" scoped>
  @import '../assets/styles/colors.scss';
    .page-loader {
      display: flex;
      justify-content: center;
      align-items: center;
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: $defaultGradient;
      z-index: 999;
    }
    @keyframes rotate {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    .loading-circle {
      border: 6px solid rgba(255, 255, 255, 0.3);
      border-top: 6px solid #fff;
      border-radius: 50%;
      width: 6.813vw;
      height: 6.813vw;
      animation: rotate 1s linear infinite;
    }
  </style>