// ===== TITLE COMPONENT =====
// This is a reusable component for section titles
// Used in Services, Portfolio, and other sections
// Displays a heading and description text

import React from 'react'

const Title = ({title, desc}) => {
  // title: The main heading text
  // desc: The description text below the heading
  
  return (
    // Fragment: doesn't add extra HTML element to the DOM
    <>
      {/* Section title/heading - responsive sizing */}
      <h2 className="text-3xl sm:text-5xl font-medium">{title}</h2>
      {/* Description text below title */}
      <p className='max-w-lg text-center text-gray-500 dark:text-white/75 mb-6'>{desc}</p>
    </>
  )
}

export default Title
