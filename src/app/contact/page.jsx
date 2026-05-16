import React from 'react'
import ContactHome from '../NewComponents/ContactPage/ContactHome'
import ContactSection from '../NewComponents/ContactPage/ContactForm'
import ContactLocations from '../NewComponents/ContactPage/ContactLocations'

const page = () => {
    return (
        <>
            <ContactHome />
            <ContactSection />
            <ContactLocations />
        </>
    )
}

export default page