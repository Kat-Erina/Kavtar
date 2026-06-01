'use client';

import React from 'react'
import Image from 'next/image';
import {useLocale} from 'next-intl';
import { usePathname,useRouter } from 'next/navigation';



const Header = () => {

   const locale = useLocale();
   console.log(locale)
  const router = useRouter();
  const pathname = usePathname();
 const currentLocale = pathname.split('/')[1]
    const switchLocale = (newLocale:string) => {
    const segments = pathname.split('/');
     segments[1] = newLocale;
     router.push(segments.join('/'));
  };


console.log(locale, pathname)
  return (
    <header className='flex justify-between items-center px-6 py-4.5 bg-black'>
        <Image src='/logo_2.svg' alt='logo' width={166} height={56} />
        <div className='flex flex-row items-center gap-[10px] cursor-pointer'>
            <p className='text-white font-inter'>{currentLocale==='ka' ? 'EN' : 'ქარ'}</p>
             <button onClick={() => switchLocale(currentLocale === 'ka' ? 'en' : 'ka')} className=' relative w-6 h-6'>
            <Image src='/icons/globe.svg' alt='globe' fill/>
        </button>
        </div>
       
    </header>
  )
}

export default Header