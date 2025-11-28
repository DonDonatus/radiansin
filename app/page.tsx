'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
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

function useTypingAnimation() {
    const [displayText, setDisplayText] = useState('');
    const [currentPhase, setCurrentPhase] = useState<'typing1' | 'pause1' | 'clearing1' | 'typing2' | 'done'>('typing1');
    
    const text1 = "What if...";
    const text2 = "Your events didn't have to be dull no more but full of radiance?";

    useEffect(() => {
        let timeout: NodeJS.Timeout;

        if (currentPhase === 'typing1') {
            if (displayText.length < text1.length) {
                timeout = setTimeout(() => {
                    setDisplayText(text1.slice(0, displayText.length + 1));
                }, 100);
            } else {
                timeout = setTimeout(() => setCurrentPhase('pause1'), 1500);
            }
        } else if (currentPhase === 'pause1') {
            timeout = setTimeout(() => setCurrentPhase('clearing1'), 1000);
        } else if (currentPhase === 'clearing1') {
            if (displayText.length > 0) {
                timeout = setTimeout(() => {
                    setDisplayText(displayText.slice(0, -1));
                }, 50);
            } else {
                timeout = setTimeout(() => setCurrentPhase('typing2'), 300);
            }
        } else if (currentPhase === 'typing2') {
            if (displayText.length < text2.length) {
                timeout = setTimeout(() => {
                    setDisplayText(text2.slice(0, displayText.length + 1));
                }, 50);
            } else {
                setCurrentPhase('done');
            }
        }

        return () => clearTimeout(timeout);
    }, [displayText, currentPhase]);

    return displayText;
}

export default function LandingPage() {
    const [isVisible, setIsVisible] = useState(false);
    const typingText = useTypingAnimation();

    useEffect(() => {
        setIsVisible(true);
    }, []);

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

            // Professionalism You Can Trust section
            sr.reveal('.trust-title', { 
                delay: 200,
                distance: '40px',
            });
            
            sr.reveal('.trust-divider', { 
                delay: 300,
                distance: '0px',
                scale: 0,
            });
            
            sr.reveal('.trust-description', { 
                delay: 400,
                distance: '30px',
            });
            
            sr.reveal('.trust-stat', { 
                delay: 200,
                interval: 150,
                origin: 'bottom',
                distance: '50px',
            });

            // Services section
            sr.reveal('.services-title', { 
                delay: 200,
                distance: '40px',
            });
            
            sr.reveal('.services-divider', { 
                delay: 300,
                distance: '0px',
                scale: 0,
            });
            
            sr.reveal('.service-card', { 
                delay: 200,
                interval: 200,
                origin: 'bottom',
                distance: '60px',
            });

            // Choose Your Style section
            sr.reveal('.style-title', { 
                delay: 200,
                distance: '40px',
            });
            
            sr.reveal('.style-divider', { 
                delay: 300,
                distance: '0px',
                scale: 0,
            });
            
            sr.reveal('.style-description', { 
                delay: 400,
                distance: '30px',
            });
            
            sr.reveal('.style-card', { 
                delay: 200,
                interval: 250,
                origin: 'bottom',
                distance: '70px',
            });
        };

        loadScrollReveal();
    }, []);

    return (
        <div className={`min-h-screen bg-black ${lora.className}`}>
            {/* Champagne Gold Glow Effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-[#D4AF37]/20 rounded-full blur-[150px]" />
            </div>

            {/* Hero Section */}
            <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-20">
                <div className="max-w-5xl mx-auto text-center">
                    {/* Main Title */}
                    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <h1 className={`${playfair.className} text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light mb-8 leading-tight tracking-tight text-white`} style={{ letterSpacing: '-0.3px', lineHeight: '1.1' }}>
                            Radiansin
                        </h1>
                    </div>

                    {/* Typing Animation Subtitle */}
                    <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <p className="text-base sm:text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed min-h-[4rem] flex items-center justify-center" style={{ lineHeight: '1.6' }}>
                            {typingText}
                            <span className="inline-block w-0.5 h-6 bg-[#D4AF37] ml-1 animate-pulse"></span>
                        </p>
                    </div>

                    {/* CTA Button */}
                    <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <button className="px-12 py-4 bg-white text-black font-medium rounded-lg text-lg hover:bg-[#D4AF37] hover:text-black transition-all duration-300 shadow-lg hover:shadow-xl">  
                            Book Your Event
                        </button>
                    </div>

                    {/* Image Cards - Masonry Style */}
                    <div className={`mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-10xl mx-auto transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="relative h-[450px] sm:h-[500px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
                            <Image
                                src="/eve.jpg"
                                alt="Professional ushering service"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>

                        <div className="relative h-[450px] sm:h-[550px] lg:h-[600px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
                            <Image
                                src="/event.jpg"
                                alt="Elegant event service"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>

                        <div className="relative h-[450px] sm:h-[500px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
                            <Image
                                src="/wedd.jpg"
                                alt="Wedding ushering team"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Professionalism You Can Trust Section */}
            <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-black">
                <div className="max-w-6xl mx-auto">
                    {/* Section Title */}
                    <div className="text-center mb-16">
                        <h2 className={`${playfair.className} trust-title text-4xl sm:text-5xl md:text-6xl font-light mb-6 text-[#D4AF37]/40`} style={{ letterSpacing: '-0.3px', lineHeight: '1.2' }}>
                            Professionalism You Can Trust
                        </h2>
                        <div className="trust-divider w-24 h-[1px] bg-[#D4AF37] mx-auto mb-6"></div>
                        <p className={`${lora.className} trust-description text-white/70 max-w-3xl mx-auto text-base sm:text-lg`} style={{ lineHeight: '1.6' }}>
                            We are a team of professional ushers dedicated to creating unforgettable experiences. Our mission is to ensure every guest feels welcomed and every moment runs seamlessly.
                        </p>
                    </div>

                    {/* Stats - Horizontal Layout */}
                    <div className="flex flex-wrap justify-center items-center gap-12 sm:gap-16">
                        <div className="trust-stat text-center">
                            <div className="text-sm text-[#D4AF37] mb-2 font-medium">Since 2020</div>
                            <div className="text-white/60 text-sm" style={{ lineHeight: '1.5' }}>
                                Building trust through excellence
                            </div>
                        </div>

                        <div className="h-16 w-[1px] bg-white/10 hidden sm:block"></div>

                        <div className="trust-stat text-center">
                            <div className={`${playfair.className} text-5xl font-semibold text-white mb-2`}>1000+</div>
                            <div className="text-white/60 text-sm" style={{ lineHeight: '1.5' }}>
                                Satisfied clients
                            </div>
                        </div>

                        <div className="h-16 w-[1px] bg-white/10 hidden sm:block"></div>

                        <div className="trust-stat text-center">
                            <div className={`${playfair.className} text-5xl font-semibold text-white mb-2`}>3000+</div>
                            <div className="text-white/60 text-sm" style={{ lineHeight: '1.5' }}>
                                Successful events
                            </div>
                        </div>

                        <div className="h-16 w-[1px] bg-white/10 hidden sm:block"></div>

                        <div className="trust-stat text-center">
                            <div className={`${playfair.className} text-5xl font-semibold text-white mb-2`}>50+</div>
                            <div className="text-white/60 text-sm" style={{ lineHeight: '1.5' }}>
                                Professional ushers
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-black">
                <div className="max-w-6xl mx-auto">
                    {/* Section Title */}
                    <div className="text-center mb-16">
                        <h2 className={`${playfair.className} services-title text-4xl sm:text-5xl md:text-6xl font-light mb-6 text-[#D4AF37]/40`} style={{ letterSpacing: '-0.3px', lineHeight: '1.2' }}>
                            Elegance in Every Detail
                        </h2>
                        <div className="services-divider w-24 h-[1px] bg-[#D4AF37] mx-auto"></div>
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="service-card p-10 rounded-lg bg-white/5 border border-white/10 hover:border-[#D4AF37] transition-all duration-300 shadow-sm hover:shadow-md">
                            <div className="w-12 h-12 mb-6 flex items-center justify-center">
                                <svg className="w-10 h-10 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className={`${playfair.className} text-2xl font-semibold mb-3 text-white`}>Dynamic Energy</h3>
                            <p className="text-white/70 text-base" style={{ lineHeight: '1.6' }}>
                                Professional ushers who bring life and warmth to your event
                            </p>
                        </div>

                        <div className="service-card p-10 rounded-lg bg-white/5 border border-white/10 hover:border-[#D4AF37] transition-all duration-300 shadow-sm hover:shadow-md">
                            <div className="w-12 h-12 mb-6 flex items-center justify-center">
                                <svg className="w-10 h-10 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                                </svg>
                            </div>
                            <h3 className={`${playfair.className} text-2xl font-semibold mb-3 text-white`}>Refined Elegance</h3>
                            <p className="text-white/70 text-base" style={{ lineHeight: '1.6' }}>
                                Sophisticated service that adds grace to every moment
                            </p>
                        </div>

                        <div className="service-card p-10 rounded-lg bg-white/5 border border-white/10 hover:border-[#D4AF37] transition-all duration-300 shadow-sm hover:shadow-md">
                            <div className="w-12 h-12 mb-6 flex items-center justify-center">
                                <svg className="w-10 h-10 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                </svg>
                            </div>
                            <h3 className={`${playfair.className} text-2xl font-semibold mb-3 text-white`}>Trusted Excellence</h3>
                            <p className="text-white/70 text-base" style={{ lineHeight: '1.6' }}>
                                Impeccably trained team dedicated to your success
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Choose Your Style Section */}
            <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-black mb-0">
                <div className="max-w-6xl mx-auto">
                    {/* Section Title */}
                    <div className="text-center mb-16">
                        <h2 className={`${playfair.className} style-title text-4xl sm:text-5xl md:text-6xl font-light mb-6 text-[#D4AF37]/40`} style={{ letterSpacing: '-0.3px', lineHeight: '1.2' }}>
                            Choose Your Style
                        </h2>
                        <div className="style-divider w-24 h-[1px] bg-[#D4AF37] mx-auto mb-6"></div>
                        <p className="style-description text-white/70 max-w-2xl mx-auto text-base" style={{ lineHeight: '1.6' }}>
                            Select the perfect ushering style for your event
                        </p>
                    </div>

                    {/* Style Cards */}
                    <div className="space-y-6">
                        {/* Elegant Events */}
                        <div className="style-card relative h-80 rounded-lg overflow-hidden group shadow-lg hover:shadow-xl transition-all duration-300">
                            <Image
                                src="/wed.jpg"
                                alt="Elegant Events - Weddings & Galas"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/90 to-transparent" />
                            <div className="absolute inset-0 flex flex-col justify-center px-8 sm:px-12">
                                <h3 className={`${playfair.className} text-4xl sm:text-5xl font-light mb-3 text-white`} style={{ letterSpacing: '-0.3px' }}>Elegant Events</h3>
                                <p className="text-white/90 text-base sm:text-lg max-w-md" style={{ lineHeight: '1.6' }}>
                                    Sophisticated elegance for weddings, galas, and upscale corporate events
                                </p>
                            </div>
                        </div>

                        {/* Vibrant Celebrations */}
                        <div className="style-card relative h-80 rounded-lg overflow-hidden group shadow-lg hover:shadow-xl transition-all duration-300">
                            <Image
                                src="/party.jpg"
                                alt="Vibrant Celebrations"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/90 to-transparent" />
                            <div className="absolute inset-0 flex flex-col justify-center px-8 sm:px-12">
                                <h3 className={`${playfair.className} text-4xl sm:text-5xl font-light mb-3 text-white`} style={{ letterSpacing: '-0.3px' }}>Vibrant Celebrations</h3>
                                <p className="text-white/90 text-base sm:text-lg max-w-md" style={{ lineHeight: '1.6' }}>
                                    Dynamic and warm service for parties, celebrations, and lively gatherings
                                </p>
                            </div>
                        </div>

                        {/* Contemporary Events */}
                        <div className="style-card relative h-80 rounded-lg overflow-hidden group shadow-lg hover:shadow-xl transition-all duration-300">
                            <Image
                                src="/con.jpg"
                                alt="Contemporary Events"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/90 to-transparent" />
                            <div className="absolute inset-0 flex flex-col justify-center px-8 sm:px-12">
                                <h3 className={`${playfair.className} text-4xl sm:text-5xl font-light mb-3 text-white`} style={{ letterSpacing: '-0.3px' }}>Contemporary Events</h3>
                                <p className="text-white/90 text-base sm:text-lg max-w-md" style={{ lineHeight: '1.6' }}>
                                    Modern and versatile approach for conferences, exhibitions, and contemporary events
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}