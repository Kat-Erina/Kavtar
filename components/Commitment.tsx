'use client';

import { useTranslations } from 'next-intl';
import React from 'react'

const Commitment = () => {
    const t=useTranslations('commitment');
  return (
    <div className='bg-black w-full px-6 py-30 flex justify-center items-center px-6'>
        <section className='flex flex-col items-center gap-6 text-center !text-white  '>
            <h2 className='text-white! text-center text-[34px] whitespace-wrap'>{t('title')}</h2>
            <p className='text-white! text-[20px] '>{t('desc')} </p>
        </section>
    </div>
  )
}

export default Commitment