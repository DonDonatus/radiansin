'use client';

import { useState, useEffect } from 'react';
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

// Gallery images data
const galleryImages = [
    { id: 1, src: '/card1.jpg', alt: 'Event Gallery 1' },
    { id: 2, src: '/card2.jpg', alt: 'Event Gallery 2' },
    { id: 3, src: '/card3.jpg', alt: 'Event Gallery 3' },
    { id: 4, src: '/card4.jpg', alt: 'Event Gallery 4' },
    { id: 5, src: '/card5.jpg', alt: 'Event Gallery 5' },
    { id: 6, src: '/card6.jpg', alt: 'Event Gallery 6' },
    { id: 7, src: '/card7.jpg', alt: 'Event Gallery 7' },
    { id: 8, src: '/gallery-8.jpg', alt: 'Event Gallery 8' },
];

export default function GalleryPage() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [centerImage, setCenterImage] = useState(galleryImages[0]);

    useEffect(() => {
        // Lock body scroll when lightbox is open
        if (selectedImage) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedImage]);

    const orbitImages = galleryImages.slice(1); // All images except the first one

    return (
        <div className="min-h-screen bg-black">
            {/* Champagne Gold Glow Effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-[#D4AF37]/20 rounded-full blur-[150px]" />
            </div>

            {/* Hero Section */}
            <section className="relative pt-32 pb-6 sm:pb-8 md:pb-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Page Title */}
                    <div className="text-center mb-8 sm:mb-12 md:mb-16">
                        <h1 className={`${playfair.className} text-4xl sm:text-5xl md:text-6xl font-light mb-6 text-[#D4AF37]/80`} style={{ letterSpacing: '-0.3px', lineHeight: '1.2' }}>
                            Our Gallery
                        </h1>
                        <div className="w-24 h-[1px] bg-[#D4AF37] mx-auto mb-6"></div>
                        <p className={`${lora.className} text-white/70 max-w-3xl mx-auto text-base sm:text-lg`} style={{ lineHeight: '1.6' }}>
                            Moments of elegance and professionalism captured at events we've had the privilege to serve
                        </p>
                    </div>
                </div>
            </section>

            {/* Gallery Grid Section - Simple and Sleek */}
            <section className="relative py-4 sm:py-6 md:py-8 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Grid of all images */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                        {galleryImages.map((image) => (
                            <div
                                key={image.id}
                                className="relative aspect-square rounded-lg overflow-hidden shadow-lg cursor-pointer group hover:shadow-2xl transition-all duration-300"
                                onClick={() => setSelectedImage(image.src)}
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                    <div className="flex items-center gap-2">
                                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                                        </svg>
                                        <span className={`${lora.className} text-white text-sm`}>View</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Instruction Text */}
                    <div className="text-center mt-12">
                        <p className={`${lora.className} text-white/50 text-sm`}>
                            Click on any image to view in full screen
                        </p>
                    </div>
                </div>
            </section>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div 
                    className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    {/* Close Button */}
                    <button
                        className="absolute top-4 right-4 sm:top-8 sm:right-8 text-white hover:text-[#D4AF37] transition-colors duration-200 z-10"
                        onClick={() => setSelectedImage(null)}
                        aria-label="Close lightbox"
                    >
                        <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Image Container */}
                    <div 
                        className="relative w-full h-full max-w-6xl max-h-[90vh] flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative w-full h-full">
                            <Image
                                src={selectedImage}
                                alt="Gallery image"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
