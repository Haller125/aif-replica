/** @type {import('next-i18next').UserConfig} */
module.exports = {
    i18n: {
        locales: ['en', 'ru'],
        defaultLocale: 'en',
    },
    localePath: 'public/locales',
    keySeparator: false, // if your translation keys don't have a separator
    interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
    },
};