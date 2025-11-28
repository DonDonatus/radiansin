'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { Playfair_Display, Lora } from 'next/font/google';

const playfair = Playfair_Display({ 
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    display: 'swap',
});

const lora = Lora({ 
    subsets: ['latin'],
    weight: ['400', '500', '600'],
    display: 'swap',
});

export default function AboutPage() {
    useEffect(() => {
        // Dynamically import ScrollReveal only on client side
        const loadScrollReveal = async () => {
            const ScrollReveal = (await import('scrollreveal')).default;
            const sr = ScrollReveal({
                origin: 'bottom',
                distance: '60px',
                duration: 1000,
                delay: 200,
                easing: 'ease-out',
                reset: false,
                mobile: true,
            });

            // Hero section animations
            sr.reveal('.hero-title', { 
                delay: 300,
                distance: '40px',
                origin: 'top',
            });
            
            sr.reveal('.hero-divider', { 
                delay: 500,
                distance: '0px',
                scale: 0,
            });
            
            sr.reveal('.hero-description', { 
                delay: 700,
                distance: '30px',
            });

            // Our Story section
            sr.reveal('.story-title', { 
                delay: 200,
            });
            
            sr.reveal('.story-text', { 
                delay: 300,
                interval: 200,
                origin: 'left',
            });
            
            sr.reveal('.story-image', { 
                delay: 400,
                origin: 'right',
                distance: '80px',
            });

            // Team section
            sr.reveal('.team-title', { 
                delay: 200,
            });
            
            sr.reveal('.team-subtitle', { 
                delay: 300,
            });
            
            sr.reveal('.team-gallery-item', { 
                delay: 200,
                interval: 150,
                origin: 'bottom',
                distance: '50px',
            });

            // Values section
            sr.reveal('.values-title', { 
                delay: 200,
            });
            
            sr.reveal('.value-card', { 
                delay: 300,
                interval: 200,
                origin: 'bottom',
                distance: '50px',
            });

            // Leadership section
            sr.reveal('.leadership-title', { 
                delay: 200,
            });
            
            sr.reveal('.leadership-subtitle', { 
                delay: 300,
            });
            
            sr.reveal('.leader-card', { 
                delay: 300,
                interval: 250,
                origin: 'bottom',
                distance: '60px',
            });
        };

        loadScrollReveal();
    }, []);

    return (
        <div className="min-h-screen bg-black">
            {/* Champagne Gold Glow Effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-[#D4AF37]/20 rounded-full blur-[150px]" />
            </div>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Page Title */}
                    <div className="text-center mb-20">
                        <h1 className={`${playfair.className} hero-title text-4xl sm:text-5xl md:text-6xl font-light mb-6 text-[#D4AF37]/80`} style={{ letterSpacing: '-0.3px', lineHeight: '1.2' }}>
                            About Radiansin
                        </h1>
                        <div className="hero-divider w-24 h-[1px] bg-[#D4AF37] mx-auto mb-6"></div>
                        <p className={`${lora.className} hero-description text-white/70 max-w-3xl mx-auto text-base sm:text-lg`} style={{ lineHeight: '1.6' }}>
                            We are a premier ushering service dedicated to creating unforgettable experiences. Our professional team brings elegance, warmth, and impeccable attention to detail to every event.
                        </p>
                    </div>

                    {/* Our Story Section */}
                    <div className="mb-32">
                        <h2 className={`${playfair.className} story-title text-3xl sm:text-4xl md:text-5xl font-light mb-12 text-white text-center`} style={{ letterSpacing: '-0.3px' }}>
                            Our Story
                        </h2>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            {/* Text Content */}
                            <div className="space-y-6">
                                <p className={`${lora.className} story-text text-white/70 text-base leading-relaxed`} style={{ lineHeight: '1.7' }}>
                                    Founded with a vision to redefine hospitality in the events industry, Radiansin has grown to become Ghana's most trusted ushering service. We believe that every guest deserves to feel welcomed, valued, and cared for from the moment they arrive.
                                </p>
                                <p className={`${lora.className} story-text text-white/70 text-base leading-relaxed`} style={{ lineHeight: '1.7' }}>
                                    Our commitment to excellence and our carefully selected team of professional ushers embody grace, sophistication, and impeccable service standards at every event we serve.
                                </p>
                            </div>

                            {/* Image */}
                            <div className="story-image relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                                <Image
                                    src="/black.jpg"
                                    alt="Our Story"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Our Team Gallery Section */}
                    <div className="mb-32">
                        <h2 className={`${playfair.className} team-title text-3xl sm:text-4xl md:text-5xl font-light mb-4 text-white text-center`} style={{ letterSpacing: '-0.3px' }}>
                            Meet Our Team
                        </h2>
                        <p className={`${lora.className} team-subtitle text-white/70 text-center mb-12 max-w-2xl mx-auto`} style={{ lineHeight: '1.6' }}>
                            Professional, elegant, and dedicated to making your event exceptional
                        </p>

                        {/* Image Grid - Masonry Style */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {/* Large Image */}
                            <div className="team-gallery-item col-span-2 row-span-2 relative h-[500px] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                                <Image
                                    src="/team-1.jpg"
                                    alt="Professional ushering team"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                                    <div>
                                        <h3 className={`${playfair.className} text-white text-2xl font-semibold mb-1`}>
                                            Professional Excellence
                                        </h3>
                                        <p className={`${lora.className} text-white/80 text-sm`}>
                                            Our team at your service
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Small Image 1 */}
                            <div className="team-gallery-item relative h-60 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                                <Image
                                    src="/team-2.jpg"
                                    alt="Usher welcoming guests"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Small Image 2 */}
                            <div className="team-gallery-item relative h-60 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                                <Image
                                    src="/team-3.jpg"
                                    alt="Team coordination"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Medium Image */}
                            <div className="team-gallery-item col-span-2 relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                                <Image
                                    src="/team-4.jpg"
                                    alt="Event service"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Small Image 3 */}
                            <div className="team-gallery-item relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                                <Image
                                    src="/team-5.jpg"
                                    alt="Professional service"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Our Values Section */}
                    <div className="mb-32">
                        <h2 className={`${playfair.className} values-title text-3xl sm:text-4xl md:text-5xl font-light mb-12 text-white text-center`} style={{ letterSpacing: '-0.3px' }}>
                            Our Values
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Value 1 */}
                            <div className="value-card p-8 rounded-lg bg-white/5 border border-white/10 hover:border-[#D4AF37] transition-all duration-300">
                                <div className="w-12 h-12 mb-6 flex items-center justify-center">
                                    <svg className="w-10 h-10 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                                    </svg>
                                </div>
                                <h3 className={`${playfair.className} text-2xl font-semibold mb-3 text-white`}>Excellence</h3>
                                <p className={`${lora.className} text-white/70 text-sm`} style={{ lineHeight: '1.6' }}>
                                    We strive for perfection in every detail, ensuring your event runs flawlessly from start to finish.
                                </p>
                            </div>

                            {/* Value 2 */}
                            <div className="value-card p-8 rounded-lg bg-white/5 border border-white/10 hover:border-[#D4AF37] transition-all duration-300">
                                <div className="w-12 h-12 mb-6 flex items-center justify-center">
                                    <svg className="w-10 h-10 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                    </svg>
                                </div>
                                <h3 className={`${playfair.className} text-2xl font-semibold mb-3 text-white`}>Warmth</h3>
                                <p className={`${lora.className} text-white/70 text-sm`} style={{ lineHeight: '1.6' }}>
                                    Genuine hospitality and care for every guest, creating a welcoming atmosphere that makes everyone feel special.
                                </p>
                            </div>

                            {/* Value 3 */}
                            <div className="value-card p-8 rounded-lg bg-white/5 border border-white/10 hover:border-[#D4AF37] transition-all duration-300">
                                <div className="w-12 h-12 mb-6 flex items-center justify-center">
                                    <svg className="w-10 h-10 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                    </svg>
                                </div>
                                <h3 className={`${playfair.className} text-2xl font-semibold mb-3 text-white`}>Integrity</h3>
                                <p className={`${lora.className} text-white/70 text-sm`} style={{ lineHeight: '1.6' }}>
                                    Honesty, reliability, and professionalism in everything we do. Your trust is our most valuable asset.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Leadership Section */}
                    <div>
                        <h2 className={`${playfair.className} leadership-title text-3xl sm:text-4xl md:text-5xl font-light mb-4 text-white text-center`} style={{ letterSpacing: '-0.3px' }}>
                            Our Leadership
                        </h2>
                        <p className={`${lora.className} leadership-subtitle text-white/70 text-center mb-12 max-w-2xl mx-auto`} style={{ lineHeight: '1.6' }}>
                            Meet the visionaries behind Radiansin's success
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            {/* Leader 1 */}
                            <div className="leader-card group">
                                <div className="relative h-80 mb-6 rounded-lg overflow-hidden shadow-lg">
                                    <Image
                                        src="/leader-1.jpg"
                                        alt="Founder & CEO"
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                        <p className={`${lora.className} text-white/90 text-sm`} style={{ lineHeight: '1.6' }}>
                                            Leading with vision and passion to create exceptional experiences
                                        </p>
                                    </div>
                                </div>
                                <h3 className={`${playfair.className} text-xl font-semibold text-white mb-1`}>Hanson Bernice</h3>
                                <p className={`${lora.className} text-[#D4AF37] text-sm mb-2`}>Founder & CEO</p>
                                <p className={`${lora.className} text-white/60 text-sm`} style={{ lineHeight: '1.6' }}>
                                    Visionary leader dedicated to revolutionizing event services with professionalism and elegance.
                                </p>
                            </div>

                            {/* Leader 2 */}
                            <div className="leader-card group">
                                <div className="relative h-80 mb-6 rounded-lg overflow-hidden shadow-lg">
                                    <Image
                                        src="/leader-2.jpg"
                                        alt="Co-Founder & Operations Director"
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                        <p className={`${lora.className} text-white/90 text-sm`} style={{ lineHeight: '1.6' }}>
                                            Ensuring seamless operations and exceptional service delivery
                                        </p>
                                    </div>
                                </div>
                                <h3 className={`${playfair.className} text-xl font-semibold text-white mb-1`}>Lois Okyere</h3>
                                <p className={`${lora.className} text-[#D4AF37] text-sm mb-2`}>Co-Founder & Operations Director</p>
                                <p className={`${lora.className} text-white/60 text-sm`} style={{ lineHeight: '1.6' }}>
                                    Expert in event management ensuring every detail is executed to perfection.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}