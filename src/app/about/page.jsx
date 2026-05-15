import React from 'react'
import SolutionsSection from '../NewComponents/AboutPage/Solutions';
import AboutHero from '../NewComponents/AboutPage/AboutHero';
import AboutUsSection from '../NewComponents/AboutPage/AboutUsSection';

const page = () => {
    return (
        <>
            <AboutHero />
            <AboutUsSection />
            <SolutionsSection />
        </>
    )
}
export default page;