import { routing } from "@/i18n/routing";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';


const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const looseWide = localFont({
    src: [
        { path: '../../public/fonts/loos-normal-regular.otf', weight: '400', style: 'normal' },
        { path: '../../public/fonts/loos-wide-bold.otf', weight: '700', style: 'normal' },
        { path: '../../public/fonts/loos-wide-light.otf', weight: '300', style: 'normal' },
         { path: '../../public/fonts/loos-wide-black.otf', weight: '500', style: 'normal' },
    ],
    variable: '--font-loose-wide',
});

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params:Promise<{ locale: string }>;
}) {
  const { locale } =await params;
const messages=await getMessages({locale});

if(!routing.locales.includes(locale as any)){
    notFound()
}


  return (
    <html lang={locale} className={`${inter.variable} ${looseWide.variable}`}>
        <NextIntlClientProvider messages={messages}>
            <body className={`${looseWide.className} w-full`}>{children}</body>
        </NextIntlClientProvider>
      
    </html>
  );
}