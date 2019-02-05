import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n);

const locales = ['en-US', 'es-EU'];
const messages = {};

for (const locale of locales) {
    messages[locale] = require(`./${locale}`).default
}

export default new VueI18n({
    locale: locales[0],
    silentTranslationWarn: true,
    messages
})