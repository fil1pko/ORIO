<template>
    <div id="contact">
        <!-- all informations container -->
        <div class="contact-wraper">

            <!-- left footer side -->
            <div class="left">
                <h4>{{ $t('contacth1') }}</h4>
                <div class="longer"></div>

                <!-- container for information -->
                <div class="information-wraper">
                    <ul>
                        <li><p>{{ $t('name') }}</p></li>
                        <li><a href="tel:9876765678">
                        <img src="../../assets/pictures/phone.svg" alt="phone icon"> {{ $t('phone1') }}</a></li>
                        <li><a href="tel:9876765678">
                        <img src="../../assets/pictures/phone.svg" alt="phone icon">{{ $t('phone2') }}</a></li>
                    </ul>
                    <ul>
                        <li><a href=""><img src="../../assets/pictures/email.svg" alt="">{{ $t('gmail') }}</a></li>
                        <li><a href=""><img src="../../assets/pictures/instagram.svg" alt="">{{ $t('instagram') }}</a></li>
                        <li><a href=""><img src="../../assets/pictures/facebook.svg" alt=""> {{ $t('facebook') }}</a></li>
                    </ul>
                </div>
            </div>

            <!-- right footer side -->
            <div class="right">
                <h4>{{ $t('contacth2') }}</h4>
                <div class="shorter"></div>

                <!-- container for information -->
                <div class="information-wraper">
                    <ul>
                        <li><p>{{ $t('name2') }}</p></li>    
                        <li><p><img src="../../assets/pictures/location.svg" alt="location icon">{{ $t('location') }}</p></li>
                        <li><p>{{ $t('ico') }}</p></li>
                    </ul>
                    <ul>
                        <li><p>{{ $t('dic') }}</p></li>
                        <li><p>{{ $t('icdph') }}</p></li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- copyright -->
        <div class="last"><p>© 2023 made by <a href="https://github.com/fil1pko">RU3Y</a></p></div>
    </div>
</template>

<style lang="scss">
   @import '../../assets/styles/colors.scss';
   @import '../../assets/styles/contact.scss';
</style>