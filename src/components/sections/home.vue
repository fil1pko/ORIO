<script>
/*
 * ORION-trust
 * Copyright (c) 2023 RU3Y
 * This code is licensed under the MIT License.
 * Visit https://opensource.org/licenses/MIT for license details.
 */
    // importing and exporting slider
    import slider from '../slider.vue';
    export default {
        components: {
            slider 
        },
        methods: {
        switchLanguage(locale) {
            this.$i18n.locale = locale;
        }
    }
    };
</script>

<template>
    <section id="home">
        <div class="home-wraper">
            <!-- home article -->
            <article>
                <!-- main site heading -->
                <h1>{{ $t('h1') }}</h1>
                <!-- text -->
                <p>{{ $t('phome') }}</p>
                <!-- button to services -->
                <a href="#services">{{ $t('buttonhome') }}</a>
            </article>

            <!-- imagine slider component -->
            <slider />
            <div><img class="img" src="../../assets/pictures/arrow.svg" alt="arrow icon"></div>

            <div class="button-wraper">
                <button @click="switchLanguage('en')">EN</button>
                <button @click="switchLanguage('cz')">CZ</button>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
   @import '../../assets/styles/colors.scss';
   @import '../../assets/styles/home.scss';
</style>