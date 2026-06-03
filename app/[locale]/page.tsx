import React from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Commitment from '@/components/Commitment'
import CorePillars from '@/components/CorePillars'
import Projects from '@/components/projects/Projects'
import { Contact } from '@/components/Contact'
import AnimatedComponent from '@/components/AnimatedComponent'
import { getTranslations } from 'next-intl/server'




export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'metadata' })

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords').split(',').map(k => k.trim()),
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      type: "website",
     siteName: "Kavtar Development",
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: '/',
      languages: {
        'en': '/en',
        'ka': '/ka'
      }
    },

      appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Kavtar Development",
  },
    
  }
}







const page =async ({ params }: { params: Promise<{ locale: string }> }) => {
  const {locale}=await params;
  return (
   <>
   <Header></Header>
<main style={{ overflowX: "hidden" }}>
     <Hero></Hero>
     <AnimatedComponent  direction="right">
      <CorePillars></CorePillars>
     </AnimatedComponent>
    <AnimatedComponent>
      <Commitment locale={locale}></Commitment>
    </AnimatedComponent>
   <AnimatedComponent direction="right">
     <Projects></Projects>
   </AnimatedComponent>
  
   <Contact></Contact>
</main>
   </>
  )
}

export default page