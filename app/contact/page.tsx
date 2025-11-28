'use client';

import { useState } from 'react';
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

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        eventDate: '',
        eventType: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    access_key: 'ec26c382-016c-4781-8f27-10275c5d461f',
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    event_date: formData.eventDate,
                    event_type: formData.eventType,
                    message: formData.message,
                    subject: `New Event Inquiry from ${formData.name}`,
                })
            });

            const data = await response.json();

            if (data.success) {
                setSubmitStatus('success');
                // Reset form
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    eventDate: '',
                    eventType: '',
                    message: ''
                });
                // Clear success message after 5 seconds
                setTimeout(() => setSubmitStatus('idle'), 5000);
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const testimonials = [
        {
            name: 'Kwame A.',
            role: 'Wedding Client',
            text: 'Radiansin made our wedding day absolutely perfect. Their professional ushers were courteous, well-dressed, and ensured every guest felt welcomed.',
            rating: 5
        },
        {
            name: 'Diana K.',
            role: 'Corporate Event',
            text: 'Outstanding service! The team was punctual, professional, and handled our corporate gala with such elegance. Highly recommend!',
            rating: 5
        },
        {
            name: 'Frank M.',
            role: 'Private Celebration',
            text: 'From start to finish, Radiansin exceeded our expectations. The attention to detail and warm hospitality made our event truly special.',
            rating: 5
        },
        {
            name: 'Clara T.',
            role: 'Church Event',
            text: 'Their team brought such grace and professionalism to our church ceremony. Every detail was handled with care and respect.',
            rating: 5
        },
        {
            name: 'Felicity O.',
            role: 'Gala Dinner',
            text: 'Impeccable service from beginning to end. The ushers were well-trained, friendly, and added such elegance to our event.',
            rating: 5
        }
    ];

    return (
        <div className="min-h-screen bg-black">
            {/* Champagne Gold Glow Effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-[#D4AF37]/20 rounded-full blur-[150px]" />
            </div>

            {/* Main Section */}
            <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Page Title */}
                    <div className="text-center mb-16">
                        <h1 className={`${playfair.className} text-4xl sm:text-5xl md:text-6xl font-light mb-6 text-[#D4AF37]/80`} style={{ letterSpacing: '-0.3px', lineHeight: '1.2' }}>
                            Get in Touch
                        </h1>
                        <div className="w-24 h-[1px] bg-[#D4AF37] mx-auto mb-6"></div>
                        <p className={`${lora.className} text-white/70 max-w-2xl mx-auto text-base`} style={{ lineHeight: '1.6' }}>
                            Ready to make your event unforgettable? Contact us today
                        </p>
                    </div>

                    {/* Two Column Layout: Form (left) and Testimonials (right) on desktop, stacked on mobile */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                        {/* Contact Form - Shows first on mobile, left on desktop */}
                        <div className="order-1">
                            <div className="p-8 sm:p-10 rounded-lg bg-white/5 border border-white/10 shadow-xl">
                                <h2 className={`${playfair.className} text-2xl sm:text-3xl font-light mb-6 text-white`}>
                                    Send us a Message
                                </h2>

                                {/* Success Message */}
                                {submitStatus === 'success' && (
                                    <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                                        <div className="flex items-center gap-2">
                                            <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <p className={`${lora.className} text-green-500 text-sm`}>
                                                Thank you! Your message has been sent successfully. We'll get back to you soon.
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {/* Error Message */}
                                {submitStatus === 'error' && (
                                    <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                                        <div className="flex items-center gap-2">
                                            <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <p className={`${lora.className} text-red-500 text-sm`}>
                                                Oops! Something went wrong. Please try again or contact us directly.
                                            </p>
                                        </div>
                                    </div>
                                )}
                                
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Name */}
                                    <div>
                                        <label htmlFor="name" className={`${lora.className} block text-white text-sm mb-2`}>
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            disabled={isSubmitting}
                                            className={`${lora.className} w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#D4AF37] transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
                                            placeholder="Your name"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label htmlFor="email" className={`${lora.className} block text-white text-sm mb-2`}>
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            disabled={isSubmitting}
                                            className={`${lora.className} w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#D4AF37] transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
                                            placeholder="your.email@example.com"
                                        />
                                    </div>

                                    {/* Phone */}
                                    <div>
                                        <label htmlFor="phone" className={`${lora.className} block text-white text-sm mb-2`}>
                                            Phone Number *
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            disabled={isSubmitting}
                                            className={`${lora.className} w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#D4AF37] transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
                                            placeholder="+233 XX XXX XXXX"
                                        />
                                    </div>

                                    {/* Event Date */}
                                    <div>
                                        <label htmlFor="eventDate" className={`${lora.className} block text-white text-sm mb-2`}>
                                            Event Date
                                        </label>
                                        <input
                                            type="date"
                                            id="eventDate"
                                            name="eventDate"
                                            value={formData.eventDate}
                                            onChange={handleChange}
                                            disabled={isSubmitting}
                                            className={`${lora.className} w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#D4AF37] transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
                                        />
                                    </div>

                                    {/* Event Type */}
                                    <div>
                                        <label htmlFor="eventType" className={`${lora.className} block text-white text-sm mb-2`}>
                                            Event Type *
                                        </label>
                                        <select
                                            id="eventType"
                                            name="eventType"
                                            value={formData.eventType}
                                            onChange={handleChange}
                                            required
                                            disabled={isSubmitting}
                                            className={`${lora.className} w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#D4AF37] transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
                                        >
                                            <option value="" className="bg-black">Select event type</option>
                                            <option value="wedding" className="bg-black">Wedding</option>
                                            <option value="corporate" className="bg-black">Corporate Event</option>
                                            <option value="gala" className="bg-black">Gala & Celebration</option>
                                            <option value="private" className="bg-black">Private Function</option>
                                            <option value="other" className="bg-black">Other</option>
                                        </select>
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label htmlFor="message" className={`${lora.className} block text-white text-sm mb-2`}>
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={5}
                                            disabled={isSubmitting}
                                            className={`${lora.className} w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#D4AF37] transition-colors resize-none disabled:opacity-50 disabled:cursor-not-allowed`}
                                            placeholder="Tell us about your event..."
                                        />
                                    </div>

                                    {/* Privacy Notice */}
                                    <p className={`${lora.className} text-white/50 text-xs`} style={{ lineHeight: '1.6' }}>
                                        By submitting this form, you agree to our Privacy Policy and consent to be contacted regarding your inquiry.
                                    </p>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`${lora.className} w-full px-8 py-4 bg-white text-black font-medium rounded-lg text-base hover:bg-[#D4AF37] hover:text-black transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2`}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Sending...
                                            </>
                                        ) : (
                                            'Send Message'
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Testimonials - Shows second on mobile, right on desktop */}
                        <div className="order-2">
                            <h2 className={`${playfair.className} text-2xl sm:text-3xl font-light mb-6 text-white`}>
                                What Our Clients Say
                            </h2>
                            
                            <div className="space-y-6">
                                {testimonials.map((testimonial, index) => (
                                    <div
                                        key={index}
                                        className="p-6 rounded-lg bg-white/5 border border-white/10 hover:border-[#D4AF37] transition-all duration-300 shadow-sm hover:shadow-md"
                                    >
                                        {/* Stars */}
                                        <div className="flex gap-1 mb-3">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <svg key={i} className="w-4 h-4 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>

                                        {/* Testimonial Text */}
                                        <p className={`${lora.className} text-white/70 text-sm mb-4`} style={{ lineHeight: '1.6' }}>
                                            "{testimonial.text}"
                                        </p>

                                        {/* Author */}
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-[#D4AF37]/20 flex items-center justify-center">
                                                <span className={`${playfair.className} text-[#D4AF37] font-semibold text-sm`}>
                                                    {testimonial.name.charAt(0)}
                                                </span>
                                            </div>
                                            <div>
                                                <h4 className={`${playfair.className} text-white font-semibold text-sm`}>
                                                    {testimonial.name}
                                                </h4>
                                                <p className={`${lora.className} text-white/50 text-xs`}>
                                                    {testimonial.role}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
