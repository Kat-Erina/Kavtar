
'use client'
import { useTranslations } from 'next-intl';
import React from 'react'

export const Contact = () => {
    const t=useTranslations('contact');
  return (
    <section className="py-8 pb-12">
        <h2 className="text-[35px] font-bold mb-3 text-center">{t('contact')}</h2>
        <ul className="list-style-none flex flex-col gap-2 text-[15px] justify-center items-center text-regular">
            <li >{t('address')}</li>
            <li>+ 000 000 000 00</li>
            <li>Gmail@gmail.com</li>
        </ul>
    </section>
  )
}