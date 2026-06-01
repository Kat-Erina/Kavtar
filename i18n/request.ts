import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';

export default getRequestConfig(async ({locale}) => {
  const safeLocale = locale ?? routing.defaultLocale;

  const validLocale = routing.locales.includes(safeLocale as any)
    ? safeLocale
    : routing.defaultLocale;

  return {
    locale: validLocale,
    messages: (await import(`../messages/${validLocale}.json`)).default
  };
});