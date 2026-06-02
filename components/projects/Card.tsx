'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const Card = ({project, svg}:{project:{name:string, title:string, desc:string}, svg:string}) => {

const [expanded, setExpanded] = useState(false);
const t=useTranslations('projects');
const pRef = useRef<HTMLParagraphElement>(null);
const [fullHeight, setFullHeight] = useState(0);
  const measure = () => {
        if (pRef.current)  setFullHeight(pRef.current.scrollHeight);
    };
useEffect(() => {
  
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
}, []);

  return (
    <section className='py-3 px-6 bg-white overflow-hidden lg:px-20 lg:py-30 border-b border-black'>
        {/* div 1  */}

     <div className='flex flex-col  lg:flex-row  lg:justify-between'>
           <p className='inter-cl text-[#3F3F3F] text-[20px] text-center mb-4 lg:w-[50%] lg:text-left lg:text-[24px] font-semibold'>{project.name}</p>

        <section className='flex flex-col  items-center justify-center lg:w-[50%] lg:items-start'>
            <h2 className='text-[34px] text-center font-semibold mb-4 lg:text-start '>{project.title}</h2>

           <div className='flex flex-col'>
            
      <p
        ref={pRef}
        style={{
            maxHeight: expanded ? `${fullHeight}px` : `${fullHeight * 0.7}px`,
        }}
        className="overflow-hidden text-center font-light transition-[max-height] duration-500 ease-in-out text-[20px] w-full lg:text-start"
    >
        {project.desc}
    </p>
    <div className='flex justify-center lg:justify-start w-full mt-10 mb-5'>
            <button className='bg-blue text-white! text-[20px] rounded-full  min-w-42.75 px-[25px] py-[15px]' onClick={() => setExpanded(prev => !prev)
            
        }>
            {expanded ? t('showLess') : t('learnMore')}
        </button>
    </div>
           </div>
                  
            
        </section>

     </div>

     {/* map section */}
<div className='w-full h-full mt-10 relative rounded-[30px]'>
    <div className='absolute -top-15 h-40 w-30 z-10 md:-top-24 md:h-60 md:w-35 lg:top-20 lg:left-10 lg:w-[295px] lg:h-[439px]'>
        <Image src={svg} alt={project.name} width={100} height={100} className='h-40 w-30 z-10 md:h-60 md:w-40 lg:w-[295px] lg:h-[439px]' />
    </div>
  <div className='relative w-full h-[354px] rounded-[30px] overflow-hidden lg:h-[539px]'>
 
  <Image alt='map' fill src='/map.png' className='object-cover object-[70%_center]'></Image>  </div>  
</div> 
   </section>
  )
}

export default Card