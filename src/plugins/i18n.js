import Vue from 'vue';
import VueI18n from 'vue-i18n';
import i18nEn from './i18n-en'
import i18nFr from './i18n-fr'

Vue.use(VueI18n);

const messages = {
    'en': i18nEn,
    'fr': i18nFr
};
const i18n = new VueI18n(
    {
        locale: 'en', // set locale
        fallbackLocale: 'fr', // set fallback locale
        messages, // set locale messages
    }
);

export default i18n;
