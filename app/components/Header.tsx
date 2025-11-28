'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ 
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    display: 'swap',
});

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Gallery', href: '/gallery' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [mobileMenuOpen]);

    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            {/* Dynamic Navigation Bar - Transparent at top, solid when scrolled */}
            <nav className={`py-4 transition-all duration-300 ${isScrolled
                ? 'bg-black/80 backdrop-blur-md shadow-lg'
                : 'bg-transparent'
                }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between gap-8">
                        {/* Logo */}
                        <Link href="/" className="flex items-center shrink-0">
                            <div className="flex items-center gap-2">
                                <div className={`${playfair.className} text-2xl font-light text-white`}>
                                    Radiansin
                                </div>
                            </div>
                        </Link>

                        {/* Desktop Navigation - Rounded Pill */}
                        <div className="hidden md:flex items-center flex-1 justify-center">
                            <div className={`rounded-full px-4 md:px-6 lg:px-8 py-2 md:py-2.5 lg:py-3 flex items-center gap-4 md:gap-6 lg:gap-8 transition-all duration-300 ${isScrolled
                                ? 'bg-white/5 border border-white/10'
                                : 'bg-white/5 backdrop-blur-sm border border-white/10'
                                }`}>
                                {navItems.map((item) => {
                                    const isActive = pathname === item.href;
                                    return (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={`${playfair.className} font-medium text-sm md:text-[15px] transition-colors duration-200 ${
                                                isActive
                                                    ? 'text-[#D4AF37]'
                                                    : 'text-white hover:text-[#D4AF37]'
                                            }`}
                                        >
                                            {item.name}
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Right side buttons */}
                        <div className="hidden md:flex items-center gap-2 lg:gap-3 shrink-0">
                            {/* Book Now Button */}
                            <Link
                                href="/contact"
                                className={`${playfair.className} bg-white text-black font-medium text-sm md:text-[15px] px-4 md:px-5 lg:px-6 py-2 md:py-2.5 lg:py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-[#D4AF37] hover:text-black`}
                            >
                                Book Now
                            </Link>
                        </div>

                        {/* Mobile menu button */}
                        <div className="flex md:hidden">
                            <button
                                type="button"
                                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                                className={`inline-flex items-center justify-center p-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200 min-w-[44px] min-h-[44px] text-white hover:bg-white/10 focus:ring-[#D4AF37]`}
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            >
                                {!mobileMenuOpen ? (
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                ) : (
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Mobile menu backdrop */}
                    {mobileMenuOpen && (
                        <div
                            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
                            onClick={() => setMobileMenuOpen(false)}
                            aria-hidden="true"
                            style={{ top: '73px' }}
                        />
                    )}

                    {/* Mobile menu */}
                    <div
                        className={`md:hidden mt-3 pb-3 transition-all duration-300 ease-in-out overflow-hidden relative z-50 ${
                            mobileMenuOpen
                                ? 'max-h-[500px] opacity-100'
                                : 'max-h-0 opacity-0'
                        }`}
                    >
                        <div className="rounded-xl p-3 space-y-1 bg-black/95 backdrop-blur-md border border-white/10 shadow-xl">
                            {navItems.map((item) => {
                                const isActive = pathname === item.href;
                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={`${playfair.className} flex items-center px-3 py-2.5 font-medium rounded-md transition-all duration-200 min-h-[40px] text-sm ${
                                            isActive
                                                ? 'text-[#D4AF37]'
                                                : 'text-white hover:bg-white/10'
                                        }`}
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                );
                            })}
                            <div className="pt-1.5 mt-1.5 border-t border-white/10">
                                <Link
                                    href="/contact"
                                    className={`${playfair.className} bg-white text-black font-medium block w-full px-3 py-2.5 rounded-lg text-center min-h-[40px] text-sm flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-[#D4AF37]`}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Book Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}