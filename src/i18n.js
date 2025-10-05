import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en.json'
import ko from './locales/ko.json'

// 초기 언어 결정
const getInitialLanguage = () => {
    // 1. localStorage에 저장된 언어 확인
    const savedLanguage = localStorage.getItem('language')
    if (savedLanguage) {
        return savedLanguage
    }

    // 2. 브라우저 언어 확인
    const browserLanguage = navigator.language.split('-')[0] // "ko-KR" → "ko"
    if (['ko', 'en'].includes(browserLanguage)) {
        return browserLanguage
    }

    // 3. 기본값
    return 'en'
}

i18n
    .use(initReactI18next) // React와 연결
    .init({
        resources: {
            en: { translation: en },
            ko: { translation: ko }
        },
        lng: getInitialLanguage(), // 초기 언어 설정
        fallbackLng: 'en', // 번역 없을 때 기본 언어
        interpolation: {
            escapeValue: false // React는 XSS 자동 방지
        }
    })

export default i18n