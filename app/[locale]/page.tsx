import React from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Commitment from '@/components/Commitment'
import CorePillars from '@/components/CorePillars'
import Projects from '@/components/projects/Projects'
import { Contact } from '@/components/Contact'
import AnimatedComponent from '@/components/AnimatedComponent'
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