import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './locales/en.json';
import es from './locales/es.json';


i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            eng: {
                translation: en
            },
            esp: {
                translation: es
            }
        },
        fallbackLng: 'eng',
        lng: 'esp',
        debug: true,

        interpolation: {
            escapeValue: false,
        },
    });


export default i18n;