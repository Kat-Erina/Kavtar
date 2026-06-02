'use client'

import { useMessages, useTranslations } from 'next-intl';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

type Pillar = { title: string; desc: string };

const CorePillars = () => {
    const images = ['/planning.png', '/development.png', '/construction.png'];
    const t = useTranslations('corePillars');
    const messages = useMessages();
    const pillars = (messages.corePillars as unknown as { items: Pillar[] }).items;

    const [current, setCurrent] = useState(0);
    const touchStartX = useRef<number | null>(null);
    const touchStartY = useRef<number | null>(null);
    const count = pillars.length;

    const prev = () => setCurrent(c => (c - 1 + count) % count);
    const next = () => setCurrent(c => (c + 1) % count);


useEffect(() => {
  const handleResize = () => {
        setCurrent(window.innerWidth >= 1200 ? 1 : 0);
    };

     handleResize();

     window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);

}, []);

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
        touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (touchStartX.current === null || touchStartY.current === null) return;
        const dx = touchStartX.current - e.changedTouches[0].clientX;
        const dy = touchStartY.current - e.changedTouches[0].clientY;
        if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
            dx > 0 ? next() : prev();
        }
        touchStartX.current = null;
        touchStartY.current = null;
    };

    return (
        <section className="py-16 bg-white overflow-hidden">
            <h2 className="text-center text-[34px] md:text-[40px] font-semibold mb-10 px-4">
                {t('title')}
            </h2>

            <div className="max-w-[1072px] mx-auto flex flex-col justify-center">
                {/* Image slider */}
                <div className="relative">
                    {/* Left arrow — desktop only */}
                    <button
                        onClick={prev}
                        className="hidden md:flex absolute left-3 top-1/3 -translate-y-1/2 z-10 w-9 h-9 items-center justify-center text-gray-500 hover:border-gray-800 hover:text-gray-800 transition-colors cursor-pointer"
                        aria-label="Previous slide"
                    >
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 8L8 12L12 16" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 12H8" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
                    </button>

                    {/* Right arrow — desktop only */}
                    <button
                        onClick={next}
                        className="hidden md:flex absolute right-3 top-1/3 -translate-y-1/2 z-10 w-9 h-9  items-center justify-center text-gray-500 hover:border-gray-800 hover:text-gray-800 transition-colors cursor-pointer"
                        aria-label="Next slide"
                    >
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 16L16 12L12 8" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 12H16" stroke="black" strokeWidth="2" strokeLinecap="round"strokeLinejoin="round"/>
</svg>
                    </button>

                    {/* Track — clips on mobile, bleeds for peek effect on desktop */}
                    <div
                        className="overflow-hidden md:overflow-visible"
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                    >
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${current * 100}%)` }}
                        >
                            {pillars.map((pillar, i) => (
                                <div key={i} className="min-w-full px-4 flex justify-center">
                                    <div className="relative w-full h-[369px] md:w-[90%] md:aspect-[15/7] rounded-2xl overflow-hidden">
                                        <Image
                                            src={images[i]}
                                            alt={pillar.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 90vw"
                                            className="object-cover object-[30%_center]"
                                            priority={i === 0}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Text slider — synced with image slider */}
                <div className="overflow-hidden md:overflow-visible mt-6 w-full">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${current * 100}%)` }}
                    >
                        {pillars.map((pillar, i) => (
                            <div key={i} className="min-w-full px-4 flex justify-center">
                                <div className="text-center md:text-left md:flex md:gap-12 md:items-start w-full md:w-[90%]">
                                    <h3 className="text-[30px] font-bold! leading-snug md:min-w-[240px] md:max-w-[280px]">
                                        {pillar.title}
                                    </h3>
                                    <p className="mt-3 md:mt-0 text-black leading-relaxed font-light text-[17px]">
                                        {pillar.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
             

                {/* Dot navigation */}
                <div className="flex justify-center gap-2.5 mt-8">
                    {pillars.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            aria-label={`Go to slide ${i + 1}`}
                            className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${
                                i === current ? 'bg-gray-800' : 'bg-gray-300'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CorePillars;
