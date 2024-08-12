/*
 * @Author: hh 1441211576@qq.com
 * @Date: 2024-08-07 09:47:32
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-08-08 15:29:50
 * @FilePath: \algorithm-visualization\apps\website\src\i18n\i18n.js
 * @Description:
 *
 */
/*
 * @Author: hjy 1441211576@qq.com
 * @Date: 2024-08-06 22:04:25
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-08-08 15:29:21
 * @FilePath: \algorithm-visualization\apps\website\src\i18n\i18n.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import enTranslation from './en.json'
import zhTranslation from './zh.json'

const lng = 'zh'
i18n
  // // detect user language
  // // learn more: https://github.com/i18next/i18next-browser-languageDetector
  // .use(LanguageDetector)
  // // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    // debug: true,
    fallbackLng: lng,
    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    },
    resources: {
      en: { translation: enTranslation },
      zh: { translation: zhTranslation }
    }
  })

export default i18n
