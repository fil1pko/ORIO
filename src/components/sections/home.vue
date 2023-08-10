<script>
    // importing and exporting slider
    import slider from '../slider.vue';
    export default {
        components: {
            slider 
        },
    };
</script>

<template>
    <section id="home">
        <div class="home-wraper">
            <!-- home article -->
            <article>
                <!-- main site heading -->
                <h1>ORION-trust</h1>
                <!-- text -->
                <p>Spoločnosť, ktorá spája skúsenosti z oblasti dodávok komunikačných IT riešení spolu s novými flexi riešeniami pre bezpečnosť správu IT riešení pre mestá a obce.</p>
                <!-- button to services -->
                <a href="#services">Naše služby</a>

                <!-- <button @click="changeLanguage('en')">English</button> -->
                <!-- <button @click="changeLanguage('es')">Español</button> -->
            </article>

            <!-- imagine slider component -->
            <slider />
            <div><img class="img" src="../../assets/pictures/arrow.svg" alt="arrow icon"></div>
        </div>
    </section>
</template>

<style lang="scss">
   @import '../../assets/styles/colors.scss';
   @import '../../assets/styles/home.scss';
</style>