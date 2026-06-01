import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: [ 'ka','en'],
  defaultLocale: 'ka',
  localePrefix: 'always',
  localeDetection: false
});

export const localeNames = {
  en: 'English',
  ka: 'ქართული',
};