
'use client';
import { useTranslations } from 'next-intl';
import React from 'react'
import Image from 'next/image';

const Hero = () => {

const t=useTranslations('hero');

  return (
    <div className='flex w-full items-center h-[90vh] relative bg-[url("/hero-1.webp")] bg-cover bg-[position:85%_20%] '>
       
        <section className='z-10 w-full h-102 flex flex-col items-center gap-5 text-center text-white px-6 '>
           {/* <div className='flex flex-col gap-5 items-center justify-center'> */}
             <h2 className='text-[39px]  font-bold text-center '>{t('title')} </h2>
             {/* <p className=' text-[39px] font-bold -mt-4'>{t('subtitle')}</p> */}
           {/* </div> */}
            <p className='text-white w-full font-semibold text-xl px-2  '>{t('desc')}  <span className='inline md:hidden'>{t('modern')}</span> <span className='font-bold font-light inline md:hidden'>{t('since')}</span></p>
            <p className='hidden md:block w-full font-semibold text-xl px-2 -mt-4'>{t('modern')} {t('since')}</p>
            <div>
        <button className='text-white px-6.5 py-4 bg-blue text-xl mt-10 rounded-full cursor-pointer min-w-47'>{t('contact')}</button>
       </div>
        </section>
        <p></p>
       
    </div>
  )
}

export default Hero