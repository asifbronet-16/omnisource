import React from 'react'
import Navbar from '../../ReusableComponents/Navbar'
import Badge from '../../ReusableComponents/Badge'

const ContactHome = () => {
    return (
        <section className="relative h-[440px] w-full overflow-hidden bg-skin-background font-public-sans select-none">
            <Navbar />
            {/* Background Image Container with Premium Tint Treatment */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat mix-blend-luminosity"
                style={{
                    backgroundImage: `url('/assets/782.webp')`,
                }}
            />
            {/* OmniSource Gradient and Ambient Tone Overlays */}
            <div className="absolute inset-0 z-10">
                {/* Bottom-to-Top Gradient: Makes the bottom solid navy to match the next section */}
                <div className="absolute inset-0 bg-gradient-primary" />
                <div className="absolute inset-0 bg-gradient-left hidden lg:block" />
            </div>
            {/* Page Header Content Container */}
            <div className="relative z-20 flex h-full items-center justify-center px-4 pt-16">
                <div className="text-center">
                    {/* Context Identity Tag */}
                    <div className='mx-auto w-fit'>
                      <Badge text={"Get in Touch"}/>
                    </div>
                    {/* Main Section Header String */}
                    <h1 className="text-4xl md:text-6xl font-extrabold text-skin-light tracking-tight leading-none mb-3">
                        Contact <span className="text-skin-logo">Us</span>
                    </h1>
                    {/* Centered Decorative Line Accent */}
                    <div className="w-12 h-1 bg-skin-logo mx-auto rounded-full" />
                </div>
            </div>
        </section>
    )
}

export default ContactHome