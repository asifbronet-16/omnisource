import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MessageSquare } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const contacts = [
        {
            icon: <Phone size={16} />,
            label: 'Phone Enquiries',
            values: ['+971 2 658 8663', '+971 56 547 3850'],
        },
        {
            icon: <Mail size={16} />,
            label: 'Email Channels',
            values: ['info@omnisource.ae'],
        },
    ];

    const locations = [
        { title: 'Abu Dhabi Headquarters', desc: 'Office No: 221, Al Fahim Building, Musaffah-4, P.O Box: 778356, Abu Dhabi, UAE' },
        { title: 'Dubai Operational Hub', desc: 'Office No: 211, Al Mozna Building, Near Al Nahda Metro Station, P.O Box: 23013, Dubai, UAE' },
        { title: 'Sharjah Regional Branch', desc: 'BCC Building, Al Zahra\'s Street P.O. Box: 77967, Sharjah, UAE' },
    ];

    return (
        <footer className="bg-skin-background text-skin-light pt-20 pb-10 px-6 md:px-20 font-public-sans border-t border-skin-subtle">
            <div className="max-w-7xl mx-auto">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Col 1: Logo & Contact */}
                    <div className="flex flex-col gap-8">
                        <Link href="/" className="flex items-center justify-start">
                            <Image src="/assets/icons/OmniSource-White.png" alt="OmniSource Logo" width={2048} height={354} priority className="h-8 w-auto" />
                        </Link>
                        <div className="space-y-6">
                            {contacts.map((c, i) => (
                                <div key={i} className="flex items-start gap-4 group">
                                    <div className="text-skin-logo mt-1 p-2 bg-skin-logo/10 rounded-md border border-blue-900/30">{c.icon}</div>
                                    <div>
                                        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">{c.label}</p>
                                        {c.values.map((v, j) => (
                                            <p key={j} className="text-sm font-normal text-slate-200 hover:text-skin-light transition-colors">{v}</p>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Col 2: Company Menu */}
                    <div className="flex flex-col gap-6">
                        <h4 className="text-skin-logo text-sm font-bold uppercase tracking-widest">Company</h4>
                        <ul className="space-y-4 text-sm font-normal text-skin-light">
                            {[
                                { name: 'Home', href: '/' },
                                { name: 'About Us', href: '/about' },
                                { name: 'Services Portfolio', href: '/services' },
                                { name: 'Contact Us', href: '/contact' },
                            ].map((link, i) => (
                                <li key={i}><Link href={link.href} className="hover:text-skin-light transition-colors">{link.name}</Link></li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 3: Solutions */}
                    <div className="flex flex-col gap-6">
                        <h4 className="text-skin-logo text-sm font-bold uppercase tracking-widest">Solutions</h4>
                        <ul className="space-y-4 text-sm font-normal text-skin-light">
                            {[
                                'Mechanical Manpower Supply',
                                'Civil Manpower Supply',
                                'Electrical Manpower Supply',
                                'Oil & Gas Workforce Deployments',
                                'Infrastructure & Logistics Personnel',
                                'Industrial Cleaning Manpower',
                            ].map((solution, i) => (
                                <li key={i} className="hover:text-skin-light transition-colors cursor-default">{solution}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 4: Connect */}
                    <div className="flex flex-col gap-6">
                        <h4 className="text-skin-logo text-sm font-bold uppercase tracking-widest">Connect</h4>
                        <ul className="space-y-4 text-sm font-normal text-skin-light">
                            {[
                                { name: 'Instagram', icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg> },
                                { name: 'X / Twitter', icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg> },
                                { name: 'YouTube', icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z" /><path d="m10 15 5-3-5-3z" /></svg> },
                                { name: 'WhatsApp Business', icon: <MessageSquare size={16} /> },
                            ].map((social, i) => (
                                <li key={i}>
                                    <a href="#" className="flex items-center gap-2 hover:text-skin-logo transition-colors group">
                                        <span className="text-skin-light group-hover:text-skin-logo transition-colors">{social.icon}</span>
                                        <span>{social.name}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="w-full h-[1px] bg-skin-logo mb-12" />

                {/* Middle Section: Hubs */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-sm font-normal leading-relaxed mb-12 text-skin-mutedLight">
                    {locations.map((loc, i) => (
                        <div key={i} className={i > 0 ? 'border-l border-blue-900/20 pl-0 md:pl-12' : ''}>
                            <h5 className="text-skin-logo font-bold mb-3 tracking-wide">{loc.title}</h5>
                            <p className="text-xs text-skin-mutedLight">{loc.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="w-full h-[1px] bg-skin-logo mb-8" />

                {/* Bottom Section */}
                <div className="text-center text-xs text-skin-mutedLight font-normal tracking-wide">
                    © Copyright {currentYear}, All Rights Reserved by OmniSource Industrial Solutions.
                </div>
            </div>
        </footer>
    );
}