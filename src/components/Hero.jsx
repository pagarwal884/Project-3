// ===== HERO SECTION COMPONENT =====
// This is the main landing section at the top of the page
// It has a headline, description, and hero image
// This is where first-time visitors get their first impression

import React from 'react'
import assets from '../assets/assets' // Import images and assets

const Hero = () => {
  return (
    // Hero section container with flex layout for centering
    <div id='hero' className='flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700 dark:text-white'>

      {/* ===== TRUST BADGE ===== */}
      {/* Small badge showing that 10K+ people trust the company */}
      <div className="inline-flex items-center gap-2 border border-gray-300 p-1.5 pr-4 rounded-full">
        <img src={assets.group_profile} alt="" className='w-20'/>
        <p className='text-xs font-medium'>Trusted by 10K+ people</p>
      </div>

      {/* ===== MAIN HEADLINE ===== */}
      {/* Large heading with gradient text effect on the word 'digital' */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-23.75 max-w-5xl">
        Turning Imagination into <span className='bg-linear-to-r from-primary to-[#4d8cea] bg-clip-text text-transparent'>digital</span> impact.
      </h1>

      {/* ===== SUBHEADING ===== */}
      {/* Supporting text that explains what the company does */}
      <p className='text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-4xl sm:max-w-lg pb-3'>
        Creating meaningful connections and turning big ideas into interactive digital experiences.
      </p>

      {/* ===== HERO IMAGE WITH BACKGROUND ===== */}
      {/* Main hero image with decorative background shape (light only) */}
      <div className="relative">
        <img src={assets.hero_img} alt="" className='w-full max-w-6xl'/>
        {/* Decorative background shape (hidden in dark mode) */}
        <img src={assets.bgImage1} alt="" className="absolute -top-40 -right-40 sm:-top-100 sm:-right-70 -z-1 dark:hidden" />
      </div>

    </div>
  )
}

export default Hero