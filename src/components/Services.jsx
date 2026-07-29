// ===== SERVICES SECTION COMPONENT =====
// This section showcases all the services the company offers
// It displays 4 services in a responsive grid layout
// Each service is displayed using the ServiceCard component

import React from 'react'
import assets from '../assets/assets' // Import images and icons
import Title from './Title' // Reusable title component
import ServiceCard from './ServiceCard' // Individual service card component

const Services = () => {
    // ===== SERVICES DATA =====
    // Array of objects, each containing info for one service
    // This data is mapped to create multiple ServiceCard components
    const servicesData = [
        {
            title: 'Advertising',
            description: 'We create high-impact advertising campaigns that increase brand awareness and drive measurable business growth.',
            icon: assets.ads_icon
        },
        {
            title: 'Content Marketing',
            description: 'We craft engaging content strategies that attract your audience, build trust, and generate qualified leads.',
            icon: assets.content_icon
        },
        {
            title: 'SEO Optimization',
            description: 'Improve your search engine rankings with data-driven SEO strategies that bring consistent organic traffic.',
            icon: assets.marketing_icon
        },
        {
            title: 'Social Media Management',
            description: 'Grow your online presence with strategic social media campaigns, creative content, and community engagement.',
            icon: assets.social_icon
        },
    ]

    return (
        // Services section container with id for navigation
        <div
            id="services"
            className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
        >
            {/* Decorative background image (light mode only) */}
            <img
                src={assets.bgImage2}
                alt=""
                className="absolute -top-110 -left-70 -z-1 dark:hidden"
            />

            {/* Section Title and Description */}
            {/* Using the Title component for consistency */}
            <Title
                title="How can we help"
                desc="Helping businesses grow with innovative digital solutions tailored to their unique goals."
            />

            {/* ===== SERVICES GRID ===== */}
            {/* Responsive grid: 1 column on mobile, 2 columns on large screens */}
            <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-2 items-stretch">
                {/* Map through servicesData array and create a ServiceCard for each */}
                {servicesData.map((service, index) => (
                    <ServiceCard
                        key={index} // React requires unique key for list items
                        service={service} // Pass service object as prop
                        index={index} // Pass index for any conditional logic
                    />
                ))}
            </div>
        </div>
    )
}

export default Services