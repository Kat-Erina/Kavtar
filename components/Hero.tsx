
'use client';
import { useTranslations } from 'next-intl';
import React from 'react'
import Image from 'next/image';

const Hero = () => {

const t=useTranslations('hero');

  return (
    <div className='flex w-full items-center h-[90vh] relative bg-[url("/hero-1.webp")] bg-cover bg-[position:85%_20%]'>
       
        <section className='z-10 w-full h-102 flex flex-col gap-5 text-center text-white'>
           <div>
             <h2 className=' text-[39px] font-bold'>{t('title')}</h2>
             <p className=' text-[39px] font-bold -mt-4'>{t('subtitle')}</p>
           </div>
            <p className='text-white font-semibold text-xl px-2 '>{t('desc')} <span className='font-bold font-light'>{t('since')}</span></p>
            <div>
        <button className='text-white px-6.5 py-4 bg-blue text-xl mt-10 rounded-full cursor-pointer'>{t('contact')}</button>
       </div>
        </section>
       
    </div>
  )
}

export default Hero