<script>
/*
 * ORION-trust
 * Copyright (c) 2023 RU3Y
 * This code is licensed under the MIT License.
 * Visit https://opensource.org/licenses/MIT for license details.
 */
</script>

<template>
    <section id="services">
        <img src="../../assets/pictures/Group6.svg" alt="elipses">
        <!-- card wrapers -->
        <div class="card-wraper">
            <div class="card-wraper2">

                <!-- card -->
                <div class="card">
                    <!-- card heading container -->
                    <div class="card-heading">
                        <!-- heading and icon -->
                        <img src="../../assets/pictures/lock.svg" alt="lock icon">
                        <h3>{{ $t('card1h') }}</h3>
                    </div>
                    <!-- card content -->
                    <p>{{ $t('card1t') }}</p>                
                </div>

                <div class="card">
                    <div class="card-heading">
                        <img src="../../assets/pictures/site.svg" alt="site icon">
                        <h3>{{ $t('card2h') }}</h3>
                    </div>
                    <p>{{ $t('card2t') }}</p>                
                </div>
            </div>

            <div class="card-wraper2">
                <div class="card">
                    <div class="card-heading">
                        <img src="../../assets/pictures/camera.svg" alt="camera icon">
                        <h3 class="ll">{{ $t('card3h') }}</h3>
                    </div>
                    <p>{{ $t('card3t') }}</p>                
                </div>

                <div class="card">
                    <div class="card-heading">
                        <img src="../../assets/pictures/cloud-solid.svg" alt="cloud icon`">
                        <h3>{{ $t('card4h') }}</h3>
                    </div>
                    <p>{{ $t('card4t') }}</p>                
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
   @import '../../assets/styles/colors.scss';
   @import '../../assets/styles/services.scss';
</style>