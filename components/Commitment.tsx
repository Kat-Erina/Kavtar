'use client';

import { useLocale, useTranslations } from 'next-intl';
import React from 'react'

const Commitment = ({ locale }: { locale: string }) => {

    const t=useTranslations('commitment');
  return (
    <div className='bg-black w-full px-6 py-30 flex justify-center items-center px-6'>
        <section className='flex flex-col items-center gap-6 text-center text-white!  '>
            <h2 className={`text-white! text-center ${locale === 'ka' ? 'text-[28px]' : 'text-[34px]'} font-regular sm:text-[34px] lg:text-[50px] lg:font-semibold`}>{t('title')}</h2>
            <p className='text-white! text-[20px] font-light lg:w-[979px] '>{t('desc')} </p>
        </section>
    </div>
  )
}

export default Commitment