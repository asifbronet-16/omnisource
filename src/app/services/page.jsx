import React from 'react'
import ServiceHero from '../NewComponents/ServicePage/ServiceHero'
import ServiceSection from '../NewComponents/ServicePage/ServiceSection'
import IndustryFAQ from '../NewComponents/ServicePage/IndustryFAQ'


const page = () => {
    return (
        <>
            <ServiceHero />
            <ServiceSection />
            <IndustryFAQ/>
        </>
    )
}

export default page