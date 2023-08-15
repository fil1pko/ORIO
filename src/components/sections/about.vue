<script>
/*
* ORION-trust
* Copyright (c) 2023 RU3Y   
* This code is licensed under the MIT License.
* Visit https://opensource.org/licenses/MIT for license details.    
*/
</script>

<template>
    <section id="about">
        <!-- elipses -->
        <img src="../../assets/pictures/EllipseAbout.svg" alt="elipse">

        <div class="about-wraper">
            <!-- about text article -->
            <article>
                <h2>{{ $t('h2') }}</h2>
                <p>{{ $t('pabout') }}</p>
            </article>

            <!-- certificates -->
            <div class="certificates-wraper">
                <h3>{{ $t('question') }}</h3>
                <div class="certificates">

                    <div>
                        <a target="_blank" href="../../../public/certificate.png"><img class="certificate" src="../../assets/pictures/certificate.png" alt="name of certificate"></a>

                        <a target="_blank" href="../../../public/certificate.png"> <img class="certificate" src="../../assets/pictures/certificate.png" alt="name of certificate"></a>
                    </div>

                    <div>
                        <a target="_blank" href="../../../public/certificate.png"><img class="certificate" src="../../assets/pictures/certificate.png" alt="name of certificate"></a>
                    
                        <a target="_blank" href="../../../public/certificate.png"> <img class="certificate" src="../../assets/pictures/certificate.png" alt="name of certificate"></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
   @import '../../assets/styles/colors.scss';
   @import '../../assets/styles/about.scss';
</style>