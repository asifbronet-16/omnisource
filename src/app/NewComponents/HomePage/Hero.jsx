"use client";
import { ArrowUpRight } from 'lucide-react';
import Navbar from '../../ReusableComponents/Navbar';
import Badge from '../../ReusableComponents/Badge';
export default function HeroSection() {
    return (
        <section className="w-full bg-cover bg-[25%_50%] lg:bg-[50%_50%] bg-no-repeat overflow-hidden z-20"
        // style={{
        //     backgroundImage: `url('https://bestmanpower.ae/wp-content/uploads/2025/05/Hero-Section-1-1-scaled.webp')`
        // }}
        >
            <Navbar />
            <section className="relative min-h-[100vh] lg:px-24 flex flex-col lg:flex-row justify-between lg:gap-10 pt-[10rem] lg:py-[14rem] overflow-hidden">

                {/* Background Video Container Layer */}
                <div className="absolute inset-0 w-full h-full z-0">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover opacity-55"
                    >
                        <source src="/assets/videos/10202777-hd_3842_2160_30fps.mp4" type="video/mp4" />
                        {/* <source src="https://www.pexels.com/download/video/30810784/" type="video/mp4" /> */}
                        Your browser does not support the video tag.
                    </video>

                    {/* //new reusable component */}
                    <div className="absolute inset-0 z-10">
                        {/* Bottom-to-Top Gradient: Makes the bottom solid navy to match the next section */}
                        <div className="absolute inset-0 bg-gradient-primary" />
                        <div className="absolute inset-0 bg-gradient-left hidden lg:block" />
                    </div>
                </div>

                {/* Content Container (placed carefully above backdrop at z-20) */}
                <div className="relative w-full lg:w-3/5 text-skin-light text-center lg:text-start px-6 z-10 h-full flex flex-col justify-center items-center lg:items-start">

                    {/* Badge Indicator Pill */}
                    <Badge text={"One source, Every trade"}/>

                    {/* Hero Display Header Text */}
                    <h1 className="text-4xl lg:text-7xl font-extrabold leading-[1.1] mb-6 tracking-tight">
                       Best Workforce  <br />
                        <span className="bg-text-gradient-right bg-clip-text text-transparent">
                            Solutions In UAE
                        </span>
                    </h1>

                    {/* Paragraph Content (Red highlights replaced with custom corporate brand blue tokens) */}
                    <p className="text-slate-300 text-xl lg:text-2xl mb-10 max-w-xl leading-relaxed">
                        {/* Reliable manpower solutions in <span className="text-skin-logo font-semibold">Abu Dhabi</span>,
                        <span className="text-skin-logo font-semibold"> Dubai</span> &
                        <span className="text-skin-logo font-semibold"> Sharjah</span> since 2015.
                        Quick, premium quality labor supply chains for all industries. */}
                        Reliable workforce solutions in <span className="text-skin-logo font-bold">UAE</span> for all industries. We are your source for every trade. Skilled and experienced labour for all  <span className="text-skin-logo font-bold">Industries</span>
                    </p>
                    {/* Call to Actions Interaction Group */}
                    <div className="flex flex-wrap gap-4 items-center justify-center lg:justify-start mb-16 lg:mb-0 w-full sm:w-auto">
                        <button className="flex items-center justify-center gap-2 bg-skin-logo text-skin-light lg:px-10 lg:py-4 py-3 px-6 rounded-md font-bold hover:bg-skin-logoHover transition duration-300 shadow-xl shadow-glow/30 w-full sm:w-auto">
                           Get a Quote <ArrowUpRight size={20} />
                        </button>
                        <button className="border border-slate-700 bg-white/5 backdrop-blur-sm lg:px-10 lg:py-4 px-6 py-3 rounded-md font-bold text-skin-light hover:bg-white/10 hover:border-slate-500 transition duration-300 w-full sm:w-auto">
                            Let's Connect
                        </button>
                    </div>
                </div>
            </section>
        </section>
    );
}