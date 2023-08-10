import { createApp } from 'vue';
import App from './App.vue';
import { createI18n } from 'vue-i18n';
import en from '@/locales/en.json';
import cz from '@/locales/cz.json';

const app = createApp(App);

const i18n = createI18n({
  locale: 'cz', // Default locale
  fallbackLocale: 'cz',
  messages: {
    en: (en),
    cz: (cz)
  }
});

app.use(i18n);
app.mount('#app');