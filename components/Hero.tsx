
'use client';
import { useTranslations } from 'next-intl';
import React from 'react'
import Image from 'next/image';

const Hero = () => {

const t=useTranslations('hero');

  return (
    <div className='flex w-full items-center h-[90vh] relative'>
           <Image
        src="/hero-1.webp"
        alt="hero background"
        fill
        priority
        className="object-cover object-[85%_20%]"
    />
         <section className='z-10 w-full h-102 flex flex-col items-center gap-5 text-center text-white! px-6 lg:gap-11'>
        <h2 className='text-[39px] font-bold text-center'>{t('title')}</h2>
        <p className='text-white! w-full font-regular text-xl px-2'>
            {t('desc')} 
            <span className='inline md:hidden'>{t('modern')}</span> 
            <span className='font-light inline md:hidden'>{t('since')}</span>
        </p>
        <p className='hidden md:block w-full font-regular text-xl px-2 -mt-4 lg:-mt-11'>
            {t('modern')} <span className='font-light'>{t('since')}</span>
        </p>
        <div>
            <button className='text-white! px-6.5 py-4 bg-blue text-xl mt-10 rounded-full cursor-pointer min-w-47'>
                {t('contact')}
            </button>
        </div>
    </section>
       
    </div>
  )
}

export default Hero