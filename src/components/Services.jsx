import React from 'react'
import assets from '../assets/assets'
import Title from './Title'

const Services = () => {

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
        <div id='services' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>

            <img src={assets.bgImage2} alt="" className="absolute -top-110 -left-70 -z-1 dark:hidden" />
            <Title
                title="How can we help"
                desc="Helping businesses grow with innovative digital solutions tailored to their unique goals."
            />

        </div>
    )
}

export default Services
