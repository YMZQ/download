import Vue from 'vue'
import { Locale } from 'vant'
import enUS from 'vant/es/locale/lang/en-US'
import db from '@/utils/localstorage'
import VueI18n from 'vue-i18n'
import messages from './langs'
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: db.get('lang') || 'en_us',
  messages: messages,
  silentTranslationWarn: true
})

Locale.use('en_us', enUS)

window.i18n = i18n
export default i18n
