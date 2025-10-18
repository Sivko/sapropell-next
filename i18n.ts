import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { Locale } from './types/messages';
import { locales, defaultLocale } from './lib/locales';

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  console.log("locale", locale);
  
  // Use default locale if locale is undefined
  const validLocale = locale || defaultLocale;
  
  if (!validLocale || !locales.includes(validLocale as Locale)) {
    console.log("Invalid locale, using default:", defaultLocale);
    return {
      locale: defaultLocale,
      messages: (await import(`./messages/${defaultLocale}.json`)).default
    };
  }

  return {
    locale: validLocale,
    messages: (await import(`./messages/${validLocale}.json`)).default
  };
});
