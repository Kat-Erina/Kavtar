'use client';

import React from 'react'
import Image from 'next/image';
import {useLocale} from 'next-intl';
import { usePathname,useRouter } from 'next/navigation';
import Link from 'next/link';



const Header = () => {

   const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
 const currentLocale = pathname.split('/')[1]
    const switchLocale = (newLocale:string) => {
    const segments = pathname.split('/');
     segments[1] = newLocale;
     router.push(segments.join('/'));
     
  };


  return (
    <header className='flex justify-between items-center px-6 py-4.5 bg-black lg:px-20 py-[18px] '>
       {/* <Link href='/'> */}
        <Image src='/logo_2.svg' alt='logo' width={166} height={56} className='w- [166px] md:w-[279px] cursor-pointer' />
        {/* </Link> */}
        <div className='flex flex-row items-center  gap-[10px]'>
            <p className='text-white! font-regular text-[20px] mt-1'>{currentLocale==='ka' ? 'EN' : 'ქარ'}</p>
             <button onClick={() => switchLocale(currentLocale === 'ka' ? 'en' : 'ka')} className=' relative w-6 h-6 cursor-pointer '>
            <Image src='/icons/globe.svg' alt='globe' fill/>
        </button>
        </div>
       
    </header>
  )
}

export default Header