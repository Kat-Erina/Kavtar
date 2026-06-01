import { routing } from "@/i18n/routing";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});


export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params:Promise<{ locale: string }>;
}) {
  const { locale } =await params;
console.log(locale)

const messages=await getMessages({locale});

if(!routing.locales.includes(locale as any)){
    notFound()
}


  return (
    <html lang={locale} className={inter.variable}>
        <NextIntlClientProvider messages={messages}>
            <body>{children}</body>
        </NextIntlClientProvider>
      
    </html>
  );
}